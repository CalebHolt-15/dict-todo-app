import { Redirect, Route, Switch } from "react-router-dom"
import Dictionary from "./pages/dictionary/Dictionary"
import TodoList from "./pages/todolist/TodoList"
import { NavbarWithRouter } from "./components/Navbar/Navbar"
import { useStyles } from "./components/Navbar/useStyles"
import HomePage from "./pages/home/HomePage"

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
            {/* <Redirect to="/404" /> */}
          </Switch>
        </main>
      </div>
    </>
  )
}

export default App
