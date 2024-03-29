import firebase from 'firebase'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message
    })
  }
}

export const logout = () => (dispatch) => {
  firebase.auth().signOut()
  dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    await firebase.auth().createUserWithEmailAndPassword(email, password)

    await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({ name, email })

    const snapshot = await firebase.firestore().collection('dwarfs').get()

    const dwarfs = []

    await snapshot.forEach((doc) => {
      dwarfs.push(doc.data())
    })

    const db = firebase.firestore()
    const batch = db.batch()

    if (dwarfs.length > 0) {
      dwarfs.forEach((dwarf) => {
        const docRef = db
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .collection('userDwarfs')
          .doc(dwarf.name.toLowerCase())
        batch.set(docRef, dwarf)
      })
      batch.commit()
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message
    })
  }
}
