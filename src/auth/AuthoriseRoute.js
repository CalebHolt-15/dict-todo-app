import React, { Component } from "react"
import { Redirect, Route } from "react-router-dom"

export const AuthoriseRoute = ({ component, ...rest }) => {
  if (!localStorage.getItem("token")) {
    return <Redirect push to="/" />
  }
  return <Route {...rest} component={component} />
}
