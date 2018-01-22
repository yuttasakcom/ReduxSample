import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const initialState = {
  count: 0,
  lastCount: []
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + 1,
        lastCount: [...state.lastCount, state.count]
      }
    case 'DEC':
      return {
        ...state,
        count: state.count - 1,
        lastCount: [...state.lastCount, state.count]
      }
    default:
      return state
  }
}

const reducers = combineReducers({ counter: counterReducer })

const myLogger = store => next => action => {
  console.log('Logged Action: ', action.type)
  next(action)
}

const store = createStore(
  reducers,
  {},
  applyMiddleware(myLogger, createLogger())
)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INC'
})

store.dispatch({
  type: 'INC'
})

store.dispatch({
  type: 'DEC'
})

const app = <div>Hello Redux!</div>

ReactDOM.render(app, document.querySelector('#app'))
