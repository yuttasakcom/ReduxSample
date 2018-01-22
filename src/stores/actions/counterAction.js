export const INC = 'INC'
export const DEC = 'DEC'

export const increment = () => async dispatch => {
  setTimeout(() => {
    dispatch({ type: INC })
  }, 2000)
}

export const decrement = () => ({ type: DEC })
