import * as actionTypes from "./types"

export const AddEmployeeAction = (newData) => (dispatch, getState) => {
  console.log("AddEmployeeAction.data:", newData)
  //Global state of redux
  // const {
  //   Employee: { employees }
  // } = getState()
  // console.log("b4Add-employees:", employees)

  // const hasEmployee = employees.find((i) => i === data)
  // if (!hasEmployee && data !== "") {

  dispatch({
    type: actionTypes.ADD_EMPLOYEE, // calling the reducer
    payload: newData // this will be passed from our react app
  })
  // }
}

export const GetEmployeeAction = (data) => (dispatch, getState) => {
  console.log("GetEmployeeAction.employee:", data)
  //Global state of redux
  // const {
  //   Employee: { employee }
  // } = getState()

  // const hasEmployee = employee.find((i) => i.employee === data)

  dispatch({
    type: actionTypes.GET_EMPLOYEE, // calling the reducer
    payload: data // this will be passed from our react app to REDUCER
  })
}

export const RemoveEmployeeAction = (data) => (dispatch, getState) => {
  console.log("RemoveEmployeeAction.employee:", data)

  // const {
  //   Employee: { Employees }
  // } = getState()
  // getState gives us access to our app state
  dispatch({
    type: actionTypes.REMOVE_EMPLOYEE,
    payload: data
  })
}
