import * as counter from '../actions/counterAction'

export default (
  state = {
    count: 0,
    lastCount: []
  },
  action
) => {
  switch (action.type) {
    case counter.INC:
      return {
        ...state,
        count: state.count + 1,
        lastCount: [...state.lastCount, state.count]
      }
    case counter.DEC:
      return {
        ...state,
        count: state.count - 1,
        lastCount: [...state.lastCount, state.count]
      }
    default:
      return state
  }
}
