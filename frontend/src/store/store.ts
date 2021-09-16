import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './rootSaga'

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
