import React from 'react'

const Main = () => {
  return (
    <div className='container py-5'>
        <nav className='d-flex justify-content-between align-items-center mb-4'>
            <h3 className='m-0'>Facebook</h3>
            <button className='btn btn-danger'>Logout</button>
        </nav>
        <div className='text-center'>
            <h4>Welcome user</h4>
            <p className='text-muted'>You are logged in. The page is protected by your JWT token.</p>
        </div>
    </div>
  )
}

export default Main