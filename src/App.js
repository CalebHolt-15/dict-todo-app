import { Redirect, Route, Switch } from "react-router-dom"
import Dictionary from "./pages/dictionary/Dictionary"
import { NavbarWithRouter } from "./components/Navbar/Navbar"
import { useStyles } from "./components/Navbar/useStyles"
import HomePage from "./pages/home/HomePage"
import MaterialTable from "./pages/material-table/Material_Table"
import DisplayData from "./pages/display-data/DisplayData"
import ReactTable from "./pages/react-table/ReactTable"
import TodoList from "./pages/todo-list/TodoList"

export const App = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <NavbarWithRouter />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/dictionary" component={Dictionary} />
            <Route path="/material-table" component={MaterialTable} />
            <Route path="/react-table" component={ReactTable} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/display-data" component={DisplayData} />

            <Redirect to="/404" />
          </Switch>
        </main>
      </div>
    </>
  )
}

export default App
