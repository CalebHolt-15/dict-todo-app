import { Redirect, Route, Switch } from "react-router-dom"
import Dictionary from "./pages/dictionary/Dictionary"
import { NavbarWithRouter } from "./components/Navbar/Navbar"
import { useStyles } from "./components/Navbar/useStyles"
import HomePage from "./pages/home/HomePage"
import MaterialTable from "./pages/material-table/Material_Table"
import DisplayData from "./pages/display-data/DisplayData"
import ReactTable from "./pages/react-table/ReactTable"
import TodoList from "./pages/todo-list/TodoList"
import PaginationTable from "./pages/react-table/PaginationTable"
import Counter from "./pages/hooks-implement/counter/Counter"
import Counter2 from "./pages/hooks-implement/counter/Counter2"
import Counter3 from "./pages/hooks-implement/counter/Counter3"
import ParentComponent from "./pages/hooks-implement/useCallback/ParentComponent"
import RowSelectTable from "./pages/react-table/RowSelectTable"
import CounterUseMemo from "./pages/hooks-implement/useMemo/CounterUseMemo"

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
            <Route path="/pagination-table" component={PaginationTable} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/display-data" component={DisplayData} />
            <Route path="/counter" component={Counter} />
            <Route path="/counter2" component={Counter2} />
            <Route path="/counter3" component={Counter3} />
            <Route path="/counter-useMemo" component={CounterUseMemo} />
            <Route path="/parent" component={ParentComponent} />
            <Route path="/row-select-table" component={RowSelectTable} />

            <Redirect to="/404" />
          </Switch>
        </main>
      </div>
    </>
  )
}

export default App
