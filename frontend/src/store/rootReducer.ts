import { combineReducers } from 'redux'
import { authReducer as auth } from './auth/authReducer'

export const rootReducer = combineReducers({
  auth,
})
