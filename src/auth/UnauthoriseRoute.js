import React from "react"
import { Route } from "react-router-dom"

export const UnAuthoriseRoute = ({ ...props }) => {
  console.log(props)
  // localStorage.removeItem("token");
  return <Route {...props} />
}
