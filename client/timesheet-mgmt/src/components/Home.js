import React, { useState, useEffect } from 'react'
import AuthService from '../services/auth.service'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import TimeSheet from './TimeSheet'
import Profile from './Profile'
import Summary from './Summary'
import BackToLoginRoute from './BackToLoginRoute'

const Home = () => {
  const [currentUser, setCurrentUser] = useState(undefined)
  //Get current user from localstorage
  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  //Logout
  const logOut = () => {
    AuthService.logout()
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/home'} className="nav-link">
              Home
            </Link>
          </li>
          {currentUser && (
            <li className="nav-item">
              <Link to={'/summary'} className="nav-link">
                Summary
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={'/timesheet'} className="nav-link">
                TimeSheet
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link">
                Profile
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/login'} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>
      {currentUser ? '' : <h2>Please log in</h2>}
      <div className="container mt-3">
        <Switch>
          {/* <Route exact path={['/', '/home']} component={Home} /> */}
          <Route exact path="/login" component={Login} />
          <BackToLoginRoute exact path="/summary" component={Summary} />
          <BackToLoginRoute exact path="/timesheet" component={TimeSheet} />
          <BackToLoginRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  )
}

export default Home
