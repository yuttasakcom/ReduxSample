import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './stores/reducers'
import App from './App'

const store = createStore(reducers, {}, applyMiddleware(createLogger(), thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
