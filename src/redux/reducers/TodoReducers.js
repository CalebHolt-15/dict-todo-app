import * as actionTypes from "../actions/types"

export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { todos: action.payload }

    case actionTypes.GET_TODO:
      return { todos: action.payload }

    case actionTypes.REMOVE_TODO:
      return { todos: action.payload }

    default:
      return state
  }
}
