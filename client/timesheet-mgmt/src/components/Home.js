import React, { useState, useEffect } from 'react'
import AuthService from '../services/auth.service'
import UserService from '../services/user.service'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'

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
              <Link to={'/user'} className="nav-link">
                User
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
      {currentUser ? <h2>Welcome</h2> : <h2>Please log in</h2>}
    
    </div>
  )
  //   const [content, setContent] = useState('')

  //   useEffect(() => {
  //     UserService.getPublicContent().then(
  //       (response) => {
  //         setContent(response.data)
  //       },
  //       (error) => {
  //         const _content =
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString()

  //         setContent(_content)
  //       }
  //     )
  //   }, [])

  //   return (
  //     <div className="container">
  //       <header className="jumbotron">
  //         <h3>{content}</h3>
  //       </header>
  //     </div>
  //   )
}

export default Home
