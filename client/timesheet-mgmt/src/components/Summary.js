import React, { useState, useEffect } from 'react'
import AuthService from '../services/auth.service'

function Summary() {
  const [currentUser, setCurrentUser] = useState(undefined)
  //Get current user from localstorage
  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  return <div>Summary</div>
}

export default Summary
