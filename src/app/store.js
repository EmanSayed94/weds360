import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'

import reducer from './../store/rootReducer'
import mySaga from '../sagas/sagas.js'

const devMode = process.env.NODE_ENV === 'development'

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer,
  devTools: devMode,
  middleware,
  preloadedState: {},
})
sagaMiddleware.run(mySaga)

export default store
