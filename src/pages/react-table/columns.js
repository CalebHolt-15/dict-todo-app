// columns
import { Update } from "@material-ui/icons"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import Delete from "./delete"
import UpdateFunction from "./update"

export const COLUMNS = [
  {
    Header: "FirstName",
    Footer: "FirstName",
    accessor: "firstname" // accessor is the "key" in the data
  },

  {
    Header: "LastName",
    Footer: "LastName",
    accessor: "lastname" // accessor is the "key" in the data
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone" // accessor is the "key" in the data
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email" // accessor is the "key" in the data
  },
  {
    Header: "Id",
    Footer: "Id",
    accessor: "_id" // accessor is the "key" in the data
  },
  {
    Header: "Actions",
    accessor: "buttons",
    Cell: ({ row }) => {
      return (
        <>
          <DeleteOutlineIcon onClick={() => Delete(row.values)} />
          <Update onClick={() => UpdateFunction(row.values)} />
        </>
      )
    }
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "FirstName",
        Footer: "FirstName",
        accessor: "firstname" // accessor is the "key" in the data
      },
      {
        Header: "LastName",
        Footer: "LastName",
        accessor: "lastname" // accessor is the "key" in the data
      }
    ]
  },
  {
    Header: "Contact",
    Footer: "Contact",
    columns: [
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone" // accessor is the "key" in the data
      },
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email" // accessor is the "key" in the data
      }
    ]
  }
]
