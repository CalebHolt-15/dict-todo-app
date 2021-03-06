import React, { useReducer } from "react"
import { Container } from "@material-ui/core"
import * as actionTypes from "./types"
// import reducer from './reducer'

const Counter = () => {
  const initialState = 0

  const reducer = (curentState, action) => {
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

  const [state, dispatch] = useReducer(reducer, initialState)
 
  return (
    <Container>
      <div>
        <div>
          <h1><u>useReducer Hook with simple state and action:</u></h1>
          <h2>Counter: {state}</h2>
        </div>
        <button onClick={() => dispatch(actionTypes.INCREMENT)}>
          Increment
        </button>
        <button onClick={() => dispatch(actionTypes.DECREMENT)}>
          Decrement
        </button>
        <button onClick={() => dispatch(actionTypes.RESET)}>Reset</button>
      </div>
    </Container>
  )
}

export default Counter
