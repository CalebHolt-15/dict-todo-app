import React from "react"
import { useSelector } from "react-redux"

export const DisplayData = () => {
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo

  return (
    <div>
      <h1>DisplayData</h1>
    </div>
  )
}

export default DisplayData
