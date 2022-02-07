import React from 'react'
import AuthService from '../services/auth.service'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const BackToLoginRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(routeProps) => {
      const user = AuthService.getCurrentUser()
      return user !== null ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to="/login" />
      )
    }}
  />
)

export default BackToLoginRoute
