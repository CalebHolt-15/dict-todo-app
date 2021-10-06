import * as actionTypes from "./types"

export const AddTodoAction = (todo) => (dispatch, getState) => {
  console.log("AddTodoAction.todo:", todo)
  //Global state of redux
  const {
    Todo: { todos }
  } = getState()

  const hasTodo = todos.find((i) => i.todo === todo)

  if (!hasTodo && todo !== "") {
    dispatch({
      type: actionTypes.ADD_TODO, // calling the reducer
      payload: [{ id: todo, todo }, ...todos] // this will be passed from our react app
    })
  }
}

export const GetTodoAction = (data) => (dispatch, getState) => {
  console.log("GetTodoAction.todo:", data)
  //Global state of redux
  const {
    Todo: { todos }
  } = getState()

  // const hasTodo = todos.find((i) => i.todo === data)

  dispatch({
    type: actionTypes.GET_TODO, // calling the reducer
    payload: [{ id: data.id, data }, ...todos] // this will be passed from our react app
  })
}

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  console.log("RemoveTodoAction.todo:", todo)

  const {
    Todo: { todos }
  } = getState()
  // getState gives us access to our app state
  dispatch({
    type: actionTypes.REMOVE_TODO,
    payload: todos.filter((t) => t.id !== todo.id)
  })
}
