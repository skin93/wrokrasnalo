import {
  DWARF_LIST_REQUEST,
  DWARF_LIST_SUCCESS,
  DWARF_LIST_FAIL,
  DWARF_DETAILS_REQUEST,
  DWARF_DETAILS_SUCCESS,
  DWARF_DETAILS_FAIL
} from '../constants/dwarfConstants'

const dwarfListState = {
  dwarfs: [],
  loading: false,
  error: ''
}

export const dwarfListReducer = (state = dwarfListState, action) => {
  switch (action.type) {
    case DWARF_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DWARF_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        dwarfs: action.payload
      }
    case DWARF_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

const dwarfDetailsState = {
  dwarf: {},
  loading: false,
  error: ''
}

export const dwarfDetailsReducer = (state = dwarfDetailsState, action) => {
  switch (action.type) {
    case DWARF_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DWARF_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        dwarf: action.payload
      }
    case DWARF_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
