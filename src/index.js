import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { CssBaseline } from "@material-ui/core"
import { NotFound } from "./errors/NotFound"
import { UnAuthoriseRoute } from "./auth/UnauthoriseRoute"
import { Provider } from "react-redux"
import { createStore } from "redux"
import  store from "./redux/store"
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        {/* <Route exact path="/404" component={NotFound} /> */}
        <UnAuthoriseRoute path="/" component={App} />
        {/* <Redirect to="/404" /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
 