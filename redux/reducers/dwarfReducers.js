export const DWARF_LIST_REQUEST = 'DWARF_LIST_REQUEST'
export const DWARF_LIST_SUCCESS = 'DWARF_LIST_SUCCESS'
export const DWARF_LIST_FAIL = 'DWARF_LIST_FAIL'

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
