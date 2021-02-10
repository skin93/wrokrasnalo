import firebase from 'firebase'
import {
  DWARF_LIST_FAIL,
  DWARF_LIST_REQUEST,
  DWARF_LIST_SUCCESS
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

    console.log(dwarfs)

    dispatch({ type: DWARF_LIST_SUCCESS, payload: dwarfs })
  } catch (err) {
    dispatch({
      type: DWARF_LIST_FAIL,
      payload: err.message
    })
  }
}
