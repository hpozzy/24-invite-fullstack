import React from "react"
import logo from "./logo.svg"
import { Invite } from "./features/invite/Invite"
import { Going } from "./features/invite/Going"
import { NotGoing } from "./features/invite/NotGoing"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Invite />
        </Route>
        <Route path="/api/going/">
          <Going />
        </Route>
        <Route path="/api/notgoing/">
          <NotGoing />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
