import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { useTable, usePagination } from "react-table"
import "./App.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {
  AddTodoAction,
  GetTodoAction,
  RemoveTodoAction
} from "../../redux/actions/todoActions"

function TodoList() {
  const [todoData, setTodoData] = useState([])
  const [todo, setTodo] = useState({ name: "" })
  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo
  console.log("////Todo:", Todo)
  console.log("//aftrAdd-todos:", todos)

  todos && todos.map((t) => console.log("#t", t))

  const [loading, setLoading] = useState(true)
  const [reload, setReload] = useState(false)
  const refresh = () => {
    setReload((reload) => !reload)
  }
  //********   Read *************/
  useEffect(() => {
    const getTodoData = async () => {
      console.log("getEmployees")
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        url: "http://localhost:8090/todo"
      }
      try {
        const { data } = await axios(options)
        dispatch(GetTodoAction(data))
        console.log("///todoData:", data)
        // setTodoData(data)
        // setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    getTodoData()
  }, [dispatch])

  const clear = () => {
    console.log("clear")
    setTodo({
      name: ""
    })
  }

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "Name",
  //       accessor: "name" // accessor is the "key" in the data
  //     },
  //     {
  //       Header: "Date",
  //       accessor: "date"
  //     }
  //   ],
  //   []
  // )

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({ columns, data: todoData })

  //********   Create  ****************

  const onSubmit = async (todos) => {
    console.log("////onSubmit.todos:", todos)

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { name: todos },
      url: "http://localhost:8090/todo/addtodo"
    }
    try {
      const { data } = await axios(options)
      console.log("added///:", data)
      dispatch(AddTodoAction(data))
      clear()

      // refresh()
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = (e) => {
    console.log("//todo: ", todo)
    e.preventDefault()
    // dispatch(AddTodoAction(todo))
    onSubmit(todo)
  }

  //********   Delete  ****************
  const onDelete = async (emp) => {
    console.log("delete.values.id:", emp)

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      url: `http://localhost:8090/todo/${emp._id}`
    }
    try {
      const { data } = await axios(options)
      console.log("deleted///:", data)
      // refresh()
    } catch (e) {
      console.error(e)
    }
  }

  const removeHandler = (t) => {
    console.log("//t:", t)
    dispatch(RemoveTodoAction(t))
    onDelete(t)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <span className="title">TODO LIST</span>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter a TODO"
              value={todo.name}
              style={{
                width: 350,
                padding: 10,
                borderRadius: 20,
                border: "none",
                fontSize: 20
                // backgroundColor: "grey"
              }}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              style={{
                padding: 12,
                borderRadius: 25,
                marginLeft: 20,
                fontSize: 15
              }}
            >
              Go
            </button>
          </form>
          <br></br>
          {todos &&
            todos
              .slice(0)
              .reverse()
              .map((t) => {
                return (
                  <ul className="allTodos">
                    <li className="singleTodo">
                      <span className="todoText">{t.name}</span>
                      <button
                        style={{
                          padding: 4,
                          borderRadius: 12,
                          border: "0.5px solid white",
                          color: "white",
                          backgroundColor: "orange"
                        }}
                        onClick={() => removeHandler(t)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                )
              })}
        </header>
      </div>
    </>
  )
}

export default TodoList

{
  /* <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: "solid 3px red",
                        background: "aliceblue",
                        color: "black"
                        // fontWeight: "bold"
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: "10px",
                            border: "solid 1px gray",
                            background: "#343D55",
                            fontSize: 15
                          }}
                        >
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        */
}

{
  /* <ul className="allTodos">
            {todoData &&
              todoData.map((t) => (
                <li key={t.id} className="singleTodo">
                  <span className="todoText">{t.name}</span>
                  <button
                    style={{
                      padding: 10,
                      borderRadius: 19,
                      border: "0.5px solid white",
                      color: "white",
                      backgroundColor: "orange"
                    }}
                    onClick={() => removeHandler(t)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          */
}
