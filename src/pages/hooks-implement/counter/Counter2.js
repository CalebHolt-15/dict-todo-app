import React, { useReducer } from "react"
import { Container } from "@material-ui/core"
import * as actionTypes from "./types"

const Counter2 = () => {

  const initialState = {
    firstCounter: 0,
    secondCounter: 10
  }

  const reducer = (currentState, action) => {
    console.log("currentState:", currentState)
    console.log("action:", action)

    switch (action.type) {
      case actionTypes.INCREMENT:
        return {
          ...currentState,
          firstCounter: currentState.firstCounter + action.value
        }
      case actionTypes.DECREMENT:
        return {
          ...currentState,
          firstCounter: currentState.firstCounter - action.value
        }
      case actionTypes.INCREMENT2:
        return {
          ...currentState,
          secondCounter: currentState.secondCounter + action.value
        }
      case actionTypes.DECREMENT2:
        return {
          ...currentState,
          secondCounter: currentState.secondCounter - action.value
        }

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
          <h1>Counter1: {state.firstCounter}</h1>
          <h1>Counter2: {state.secondCounter}</h1>
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
        {/* //// */}
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
        <div>
          <button
            onClick={() => dispatch({ type: actionTypes.INCREMENT2, value: 1 })}
          >
            Increment counter2
          </button>
          <button
            onClick={() => dispatch({ type: actionTypes.DECREMENT2, value: 1 })}
          >
            Decrement counter2
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Counter2
