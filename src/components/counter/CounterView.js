import React from 'react'
import { connect } from 'react-redux'

const counterView = props => <div>counter: {props.counter.count}</div>

const mapStateToProps = ({ counter }) => ({ counter })

export default connect(mapStateToProps)(counterView)
