import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h3 className='card-title'>Login</h3>
              <form>
                <div className='mb-3'>
                  <label className='form-label text-start d-block'>Email</label>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Enter your email'
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label className='form-label text-start d-block'>Password</label>
                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Enter your password'
                    required
                  />
                </div>

                <button type='submit' className='btn btn-primary w-100'>Login</button>
              </form>
              <div className='text-center mt-3'>
                <span>Don't have an account?</span>{' '}
                <Link to='/signup'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
