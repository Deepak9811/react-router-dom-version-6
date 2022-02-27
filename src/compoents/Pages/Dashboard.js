import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let naviagte = useNavigate()
  let data ={
    "name":"deepak singh "
  }
  return (
    <div>
      <h1>
        Dashboard pages
        </h1> 
        <button onClick={()=>{naviagte('/logout',{state:data})}}>
          Logout
        </button>
      </div>
  )
}

export default Dashboard