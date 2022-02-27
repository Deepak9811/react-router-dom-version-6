import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
  let location = useLocation()

  console.log("location data found :- ",location)
  
  return (
    <div>
      Login pages
      <h1>{location.state.st}</h1>
      </div>
  )
}

export default Login