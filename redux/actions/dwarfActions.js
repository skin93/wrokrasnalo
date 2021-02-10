import firebase from 'firebase'
import {
  DWARF_LIST_FAIL,
  DWARF_LIST_REQUEST,
  DWARF_LIST_SUCCESS,
  DWARF_DETAILS_REQUEST,
  DWARF_DETAILS_SUCCESS,
  DWARF_DETAILS_FAIL
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

    console.log(dwarf)

    dispatch({ type: DWARF_DETAILS_SUCCESS, payload: dwarf[0] })
  } catch (err) {
    dispatch({
      type: DWARF_DETAILS_FAIL,
      payload: err.message
    })
  }
}
