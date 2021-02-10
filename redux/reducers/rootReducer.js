import { combineReducers } from 'redux'
import { dwarfDetailsReducer, dwarfListReducer } from './dwarfReducers'
import { userLoginReducer, userRegisterReducer } from './userReducers'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  dwarfList: dwarfListReducer,
  dwarfDetails: dwarfDetailsReducer
})

export default rootReducer
