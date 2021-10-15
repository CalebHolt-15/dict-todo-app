import React, { useReducer } from "react"
import { Container } from "@material-ui/core"
import * as actionTypes from "./types"

const Counter2 = () => {
  const initialState = {
    firstCounter: 0
  }

  const reducer = (currentState, action) => {
    console.log("currentState:", currentState)
    console.log("action:", action)

    switch (action.type) {
      case actionTypes.INCREMENT:
        return { firstCounter: currentState.firstCounter + action.value } //newstate
      case actionTypes.DECREMENT:
        return { firstCounter: currentState.firstCounter - action.value } //newstate
      case actionTypes.RESET:
        return initialState //newstate
      default:
        return currentState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log("//state:", state)
  return (
    <Container>
      <div>
        <div>
          <h1>Counter2: {state.firstCounter}</h1>
        </div>
        <button
          onClick={() => dispatch({ type: actionTypes.INCREMENT, value: 1 })}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: actionTypes.DECREMENT, value: 1 })}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch({ type: actionTypes.INCREMENT, value: 5 })}
        >
          Increment5
        </button>
        <button
          onClick={() => dispatch({ type: actionTypes.DECREMENT, value: 5 })}
        >
          Decrement5
        </button>
        <button onClick={() => dispatch({ type: actionTypes.RESET })}>
          Reset
        </button>
      </div>
    </Container>
  )
}

export default Counter2
