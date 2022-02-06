import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AuthService from './services/auth.service'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          {/* <Route path="/user" component={BoardUser} /> */}
        </Switch>
      </div>
    </div>
  )
}

export default App
