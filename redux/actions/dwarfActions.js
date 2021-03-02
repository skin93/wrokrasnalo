import firebase from 'firebase'
import {
  DWARF_LIST_FAIL,
  DWARF_LIST_REQUEST,
  DWARF_LIST_SUCCESS,
  DWARF_DETAILS_REQUEST,
  DWARF_DETAILS_SUCCESS,
  DWARF_DETAILS_FAIL,
  DWARF_LIST_MY_REQUEST,
  DWARF_LIST_MY_SUCCESS,
  DWARF_LIST_MY_FAIL,
  DWARF_ADD_TO_COLLECTION_REQUEST,
  DWARF_ADD_TO_COLLECTION_FAIL,
  DWARF_ADD_TO_COLLECTION_SUCCESS
} from '../constants/dwarfConstants'

export const listDwarfs = () => async (dispatch) => {
  try {
    dispatch({
      type: DWARF_LIST_REQUEST
    })

    const snapshot = await firebase.firestore().collection('dwarfs').get()

    const dwarfs = []

    await snapshot.forEach((doc) => {
      dwarfs.push(doc.data())
    })

    dispatch({ type: DWARF_LIST_SUCCESS, payload: dwarfs })
  } catch (err) {
    dispatch({
      type: DWARF_LIST_FAIL,
      payload: err.message
    })
  }
}

export const listDwarfDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DWARF_DETAILS_REQUEST
    })

    const snapshot = await firebase
      .firestore()
      .collection('dwarfs')
      .where('id', '==', id)
      .get()

    const dwarf = []

    await snapshot.forEach((doc) => {
      dwarf.push(doc.data())
    })

    dispatch({ type: DWARF_DETAILS_SUCCESS, payload: dwarf[0] })
  } catch (err) {
    dispatch({
      type: DWARF_DETAILS_FAIL,
      payload: err.message
    })
  }
}

export const listMyDwarfs = () => async (dispatch) => {
  try {
    dispatch({
      type: DWARF_LIST_MY_REQUEST
    })

    const userDwarfs = []

    const snapshot = await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('userDwarfs')
      .where('added', '==', true)
      .get()

    await snapshot.forEach((doc) => {
      userDwarfs.push(doc.data())
    })

    dispatch({ type: DWARF_LIST_MY_SUCCESS, payload: userDwarfs })
  } catch (err) {
    dispatch({
      type: DWARF_LIST_MY_FAIL,
      payload: err.message
    })
  }
}

export const addDwarfToCollection = (dwarf) => async (dispatch) => {
  try {
    dispatch({
      type: DWARF_ADD_TO_COLLECTION_REQUEST
    })

    const userDwarfs = []

    const snapshot = await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('userDwarfs')
      .doc(dwarf.name.toLowerCase())
      .set({
        added: true,
        name: dwarf.name,
        description: dwarf.description,
        picture_src: dwarf.picture_src,
        lat: dwarf.lat,
        lng: dwarf.lng,
        address: dwarf.address,
        id: dwarf.id
      })

    await snapshot.forEach((doc) => {
      userDwarfs.push(doc.data())
    })

    dispatch({ type: DWARF_ADD_TO_COLLECTION_SUCCESS, payload: userDwarfs })
  } catch (err) {
    dispatch({
      type: DWARF_ADD_TO_COLLECTION_FAIL,
      payload: err.message
    })
  }
}
