import { Redirect, Route, Switch } from "react-router-dom"
import Dictionary from "./pages/dictionary/Dictionary"
import { NavbarWithRouter } from "./components/Navbar/Navbar"
import { useStyles } from "./components/Navbar/useStyles"
import TodoList from "./pages/todolist/TodoList"
import HomePage from "./pages/home/HomePage"
import ReactTable from "./pages/react-table/ReactTable"

export const App = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <NavbarWithRouter />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/homepage" component={HomePage} />
            <Route path="/dictionary" component={Dictionary} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/react-table" component={ReactTable} />
            {/* <Redirect to="/404" /> */}
          </Switch>
        </main>
      </div>
    </>
  )
}

export default App
