import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from "./components/navbar"
import Home from "./components/home"
import Login from "./components/login"
import Register from "./components/register"
import Admin from "./components/admin"
import Todos from "./components/todos"
import Photos from "./components/photos"

import PrivateRoute from "./hocs/privateRoute"
import UnprivateRoute from "./hocs/unprivateRoute"

import "./styles/main.scss"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <UnprivateRoute path="/login" component={Login} />
      <UnprivateRoute path="/register" component={Register} />
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
      <PrivateRoute path="/photos" roles={["user", "admin"]} component={Photos} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
    </Router>
    
  )
}

export default App
