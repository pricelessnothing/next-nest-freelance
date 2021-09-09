import { ActionFromReducer } from 'redux'
import { initialUserState, UserState } from './state'

export const authReducer = (
  state = initialUserState,
  action: ActionFromReducer<UserState>,
) => {
  switch (action) {
    default:
      return state
  }
}
