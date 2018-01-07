import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import appReducers from './reducers'


const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, createLogger({ collapsed: true })]

export default function configureStore(initialState = {}) {
  const store = createStore(
    appReducers,
    initialState,
    applyMiddleware(...middleware),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = appReducers

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
