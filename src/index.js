import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const initialState = {
  count: 0,
  lastCount: []
}

const reducers = (state = initialState, action) => {
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

const store = createStore(reducers)

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
