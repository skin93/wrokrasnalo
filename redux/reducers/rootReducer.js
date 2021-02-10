import { combineReducers } from 'redux'
import { dwarfListReducer } from './dwarfReducers'
import { userLoginReducer, userRegisterReducer } from './userReducers'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  dwarfList: dwarfListReducer
})

export default rootReducer
