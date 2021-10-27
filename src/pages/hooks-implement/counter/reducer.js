import * as actionTypes from "./types"

const reducer = (curentState, action, initialState = 0) => {
  switch (action) {
    case actionTypes.INCREMENT:
      return curentState + 1 //newstate
    case actionTypes.DECREMENT:
      return curentState - 1 //newstate
    case actionTypes.RESET:
      return initialState //newstate
    default:
      return curentState
  }
}

export default reducer
