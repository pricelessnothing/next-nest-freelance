import { call, put, takeLatest } from '@redux-saga/core/effects'
import { loginUser, registerUser } from '../../services/api.service'
import { User } from '../../types/user'
import { loginRequestAction, updateUserStateAction } from './actions'
import { LOGIN_REQUEST, REGISTER } from './actionTypes'

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
  yield takeLatest(REGISTER, registerSaga)
}

function* loginSaga({ payload: credentials }) {
  const { data, error } = yield call(loginUser, credentials)

  if (data) {
    const { sessionId, user } = data
    const { type, name, login } = user

    yield put(
      updateUserStateAction({
        isLogged: true,
        sessionId,
        type,
        name,
        login,
      }),
    )
  }

  if (error) {
    switch (error.code) {
      default:
        console.error(`${error.code}: ${error.message}`)
    }
  }
}

function* registerSaga({ payload: userData }: { payload: Partial<User> }) {
  const { data, error } = yield call(registerUser, userData)

  if (data) {
    yield put(
      loginRequestAction({
        login: userData.login as string,
        password: userData.password as string,
      }),
    )
  }

  if (error) {
    switch (error.code) {
      default:
        console.error(`${error.code}: ${error.message}`)
    }
  }
}
