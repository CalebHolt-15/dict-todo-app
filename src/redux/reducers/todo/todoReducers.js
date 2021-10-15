import * as actionTypes from "../../actions/todo/types"

export const TodoReducer = (state = { todos: [] }, action) => {
  console.log("///action:", action) //action:{type,payload} from reducer
  // console.log("///state:", state)

  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        todos: [...state.todos, action.payload] //payload=[...todos, newData] =newState
      }

    case actionTypes.GET_TODO:
      return {
        todos: action.payload
      }

    case actionTypes.REMOVE_TODO:
      return {
        todos: state.todos.filter((t) => t._id !== action.payload._id)
      }

    default:
      return state //current state
  }
}

//reducer(curState,action) = newState