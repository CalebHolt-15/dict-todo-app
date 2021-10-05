import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { useTable, usePagination } from "react-table"
import "./App.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {
  AddTodoAction,
  RemoveTodoAction
} from "../../redux/actions/TodoActions"

function ReactTable() {
  const [empData, setEmpData] = useState([])
  const [todo, setTodo] = useState([])
  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo

  //********   Read *************/
  useEffect(() => {
    const getEmployees = async (values) => {
      console.log("getEmployees")
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        data: { ...values },
        withCredentials: true,
        url: "http://localhost:8090/todo"
      }
      try {
        const { data } = await axios(options)
        console.log("employees:", data)
        setEmpData(data)
      } catch (e) {
        console.error(e)
      }
    }
    getEmployees()
  }, ["http://localhost:8090/todo"])

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name" // accessor is the "key" in the data
      },
      {
        Header: "Date",
        accessor: "date"
      }
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: empData })

  //********   Create  ****************
  const onSubmit = async (todo) => {
    console.log("onSubmit.values:", todo)
    // dispatch(AddTodoAction(todo))

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { ...todo },
      url: "http://localhost:8090/todo/addtodo"
    }
    try {
      const { data } = await axios(options)
      console.log("added///:", data)
    } catch (e) {
      console.error(e)
    }
  }
  console.log("todo:", todo)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <span className="title">TODO LIST</span>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter a TODO"
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
              onClick={(e) => {}}
            >
              Go
            </button>
          </form>
          <ul className="allTodos">
            {todos &&
              todos.map((t) => (
                <li key={t.id} className="singleTodo">
                  <span className="todoText">{t.todo}</span>
                  <button
                    style={{
                      padding: 10,
                      borderRadius: 25,
                      border: "1px solid white",
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
        </header>
      </div>
    </>
  )
}

export default ReactTable

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
