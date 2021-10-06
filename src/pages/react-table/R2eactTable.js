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

function R2eactTable() {
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
        console.log("///employees:", data)
        dispatch(GetTodoAction(data))

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
    console.log("onSubmit.todo:", todo)

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { name: todo },
      url: "http://localhost:8090/todo/addtodo"
    }
    try {
      const { data } = await axios(options)
      console.log("added///:", data)
    } catch (e) {
      console.error(e)
    }
  }

  //********   Delete  ****************
  const onDelete = async (id) => {
    console.log("delete.values.id:", id)

    dispatch(RemoveTodoAction(id))
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      url: `http://localhost:8090/todo/${id}`
    }
    try {
      const { data } = await axios(options)
      console.log("deleted///:", data)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = (e) => {
    console.log("//todo: ", todo)
    e.preventDefault()
    dispatch(AddTodoAction(todo))
    onSubmit(todo)
  }

  const removeHandler = (t) => {
    console.log("//t:", t)
    dispatch(RemoveTodoAction(t))
    // onDelete(t)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <span className="title">TODO LIST TABLE</span>
          <br />
          <br />

          {empData !== null ? (
            <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
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
          ) : (
            <span> NO TODO LIST</span>
          )}
        </header>
      </div>
    </>
  )
}

export default R2eactTable
