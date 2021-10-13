// columns

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
