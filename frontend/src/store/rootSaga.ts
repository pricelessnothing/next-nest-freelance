import { spawn } from 'redux-saga/effects'
import { authSaga } from './auth/auth.saga'

export function* rootSaga() {
  yield spawn(authSaga)
}
