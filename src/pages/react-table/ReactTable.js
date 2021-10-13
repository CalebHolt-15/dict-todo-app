import React, { useEffect, useMemo, useState } from "react"
import { useTable, usePagination } from "react-table"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {
  AddTodoAction,
  GetTodoAction,
  RemoveTodoAction
} from "../../redux/actions/todoActions"
import { COLUMNS } from "./columns"
import "./table.css"

const ReactTable = () => {
  const [empData, setEmpData] = useState([])
  const [todo, setTodo] = useState([])
  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo) //Todo:from store
  const { todos } = Todo
  console.log("##Todo:", Todo)

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => empData, [empData])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }) //  ES6 shorthand syntax

  //********   Read *************/
  useEffect(() => {
    const getEmployees = async (values) => {
      console.log("getEmployees")
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        data: { ...values },
        withCredentials: true,
        url: "http://localhost:8090/employee"
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
  }, [])

  //********   Create  ****************
  const onSubmit = async (todo) => {
    console.log("//onSubmit.todo:", todo)
    console.log("Todo:", Todo)

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
      <span className="title">EMPLOYEE TABLE</span>

      {empData.length !== 0 ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
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
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h4> There is no Employee Data yet </h4>
      )}
    </>
  )
}

export default ReactTable
