import * as actionTypes from "../../actions/employee/types"

export const EmployeeReducer = (state = { employees: [] }, action) => {
  console.log("///action:", action)
  // console.log("///state:", state)

  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return {
        employees: [...state.employees, action.payload] //payload=[...employees, newData]
      }

    case actionTypes.GET_EMPLOYEE:
      return {
        employees: action.payload
      }

    case actionTypes.REMOVE_EMPLOYEE:
      return {
        employees: state.Employees.filter((t) => t._id !== action.payload._id)
      }

    default:
      return state //current state
  }
}
