import { User, UserCredentials } from '../../types/user'
import { LOGIN_REQUEST, REGISTER, UPDATE_USER_STATE } from './actionTypes'
import { UserState } from './state'

export function registerAction(userData: Partial<User>) {
  return {
    type: REGISTER,
    payload: userData,
  }
}

export function loginRequestAction(credentials: UserCredentials) {
  return {
    type: LOGIN_REQUEST,
    payload: credentials,
  }
}

export function updateUserStateAction(state: UserState) {
  return {
    type: UPDATE_USER_STATE,
    payload: state,
  }
}
