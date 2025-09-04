import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const Main = () => {
  const [username, setUsername] = useState("User")
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decoded = jwtDecode(token)
        // adjust key based on your JWT payload
        setUsername(decoded.name || "User")
        setUserEmail(decoded.email || "")
      } catch (err) {
        console.error("Invalid token:", err)
        setUsername("User")
      }
    }
  }, []) // runs once when component mounts

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className='container py-5'>
      <nav className='d-flex justify-content-between align-items-center mb-4'>
        <h3 className='m-0'>Facebook</h3>
        <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
      </nav>
      
      <div className='text-center'>
        <h4>Welcome {username} !</h4>
        <p>{userEmail}</p>
        <p className='text-muted'>
          You are logged in. The page is protected by your JWT token.
        </p>
      </div>
    </div>
  )
}

export default Main
