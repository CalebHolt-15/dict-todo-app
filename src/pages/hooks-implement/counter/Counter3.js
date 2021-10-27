import React, { useReducer } from "react"
import { Container } from "@material-ui/core"
import * as actionTypes from "./types"

const Counter3 = () => {
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
  const [state2, dispatch2] = useReducer(reducer, initialState)

  return (
    <Container>
      <div>
        <div>
          <h1>
            <u> Multiple useReducer Hook:</u>
          </h1>

          <h2>Counter: {state}</h2>
        </div>
        <button onClick={() => dispatch(actionTypes.INCREMENT)}>
          Increment
        </button>
        <button onClick={() => dispatch(actionTypes.DECREMENT)}>
          Decrement
        </button>
        <button onClick={() => dispatch(actionTypes.RESET)}>Reset</button>
        <div>
          <h2>CounterTwo: {state2}</h2>
        </div>
        <button onClick={() => dispatch2(actionTypes.INCREMENT)}>
          Increment
        </button>
        <button onClick={() => dispatch2(actionTypes.DECREMENT)}>
          Decrement
        </button>
        <button onClick={() => dispatch2(actionTypes.RESET)}>Reset</button>
      </div>
    </Container>
  )
}

export default Counter3
