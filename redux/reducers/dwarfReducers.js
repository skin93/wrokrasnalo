import {
  DWARF_LIST_REQUEST,
  DWARF_LIST_SUCCESS,
  DWARF_LIST_FAIL,
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

const initialState = {
  loading: false,
  error: '',
  dwarfs: [],
  dwarf: {},
  userDwarfs: []
}

export const dwarfListReducer = (state = initialState, action) => {
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

export const dwarfDetailsReducer = (state = initialState, action) => {
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

export const dwarfListMyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DWARF_LIST_MY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DWARF_LIST_MY_SUCCESS:
      return {
        ...state,
        loading: false,
        userDwarfs: action.payload
      }
    case DWARF_LIST_MY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const dwarfAddToCollectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DWARF_ADD_TO_COLLECTION_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DWARF_ADD_TO_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        userDwarfs: [action.payload, ...userDwarfs]
      }
    case DWARF_ADD_TO_COLLECTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
