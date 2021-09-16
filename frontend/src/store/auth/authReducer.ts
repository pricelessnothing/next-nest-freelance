import { Reducer } from 'react'
import { Action } from 'redux'
import { initialUserState, UserState } from './state'
import * as Actions from './actionTypes'

export const authReducer: Reducer<
  UserState,
  Action & { payload: Partial<UserState> }
> = (state = initialUserState, action): UserState => {
  switch (action.type) {
    case Actions.UPDATE_USER_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
