import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { EmployeeReducer } from "../reducers/employee/employeeReducers"
import { TodoReducer } from "../reducers/todo/todoReducers"

const rootReducer = combineReducers({
  Todo: TodoReducer, //useSelector can access this
  Employee: EmployeeReducer
})
console.log("///store ")

const initialState = {}
const middleware = [thunk] //there can be multiple middlewares here

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // passing middleware/applyMiddleware=> enhancer
)

export default store
