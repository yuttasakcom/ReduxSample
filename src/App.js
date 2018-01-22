import React from 'react'
import CounterControl from './components/counter/CounterControl'
import CounterView from './components/counter/CounterView'

const App = props => (
  <div>
    <CounterView />
    <CounterControl />
  </div>
)

export default App
