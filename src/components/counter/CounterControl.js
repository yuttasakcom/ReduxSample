import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../stores/actions/counterAction'

const counterControl = props => (
  <div>
    <button onClick={() => props.increment()}>+</button>
    <button onClick={() => props.decrement()}>-</button>
  </div>
)

export default connect(null, { increment, decrement })(counterControl)
