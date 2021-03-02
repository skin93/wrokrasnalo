import { combineReducers } from 'redux'
import {
  dwarfDetailsReducer,
  dwarfListReducer,
  dwarfListMyReducer
} from './dwarfReducers'
import { userLoginReducer, userRegisterReducer } from './userReducers'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  dwarfList: dwarfListReducer,
  dwarfDetails: dwarfDetailsReducer,
  dwarfListMy: dwarfListMyReducer
})

export default rootReducer
