import React, { useEffect, useMemo, useState } from "react"
import { useTable, useSortBy, usePagination } from "react-table"
import axios from "axios"
import { COLUMNS, GROUPED_COLUMNS } from "./columns"
import "./table.css"
import { Container } from "@material-ui/core"

const PaginationTable = () => {
  const [empData, setEmpData] = useState([])
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => empData, [empData])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0
      }
    },
    useSortBy,
    usePagination
  ) //  ES6 shorthand syntax

  const { pageIndex, pageSize } = state

  //********   Read *************/
  useEffect(() => {
    const getEmployees = async (values) => {
      console.log("getEmployees")
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        data: { ...values },
        url: "http://localhost:8090/employee"
      }
      try {
        const { data } = await axios(options)
        console.log("///employees:", data)
        // dispatch(GetEmpAction(data))
        setEmpData(data)
      } catch (e) {
        console.error(e)
      }
    }
    getEmployees()
  }, [])

  return (
    <Container>
      <span className="title">EMPLOYEE TABLE</span>

      {empData.length !== 0 ? (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "🔽"
                            : "🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
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
          <div className="pagination">
            <span>
              {" "}
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              |GoTo Page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: "50px" }}
              ></input>
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 15, 20, 25, 30, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Prev
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </>
      ) : (
        <h4> There is no Employee Data yet </h4>
      )}
    </Container>
  )
}

export default PaginationTable
