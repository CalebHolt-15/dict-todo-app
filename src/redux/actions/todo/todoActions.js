import * as actionTypes from "./types"

export const AddTodoAction = (newData) => (dispatch, getState) => {
  console.log("AddTodoAction.data:", newData)
  //Global state of redux
  // const {
  //   Todo: { todos }
  // } = getState()
  // console.log("b4Add-todos:", todos)

  // const hasTodo = todos.find((i) => i === data)
  // if (!hasTodo && data !== "") {

  dispatch({
    type: actionTypes.ADD_TODO, // calling the reducer
    payload: newData // this will be passed from our react app
  })
  //} //action:{type,payload} to reducer
}

export const GetTodoAction = (data) => (dispatch, getState) => {
  console.log("GetTodoAction.todo:", data)
  //Global state of redux
  // const {
  //   Todo: { todos }
  // } = getState()

  // const hasTodo = todos.find((i) => i.todo === data)

  dispatch({
    type: actionTypes.GET_TODO, // calling the reducer
    payload: data // this will be passed from our react app to REDUCER
  })
}

export const RemoveTodoAction = (data) => (dispatch, getState) => {
  console.log("RemoveTodoAction.todo:", data)

  // const {
  //   Todo: { todos }
  // } = getState()
  // getState gives us access to our app state
  dispatch({
    type: actionTypes.REMOVE_TODO,
    payload: data
  })
}
