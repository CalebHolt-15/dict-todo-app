import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { TodoReducer } from "../reducers/todoReducers"

const rootReducer = combineReducers({
  Todo: TodoReducer //useSelector can access this
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
