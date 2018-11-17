import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLayout = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating teal">JD</NavLink></li>
      </ul>
    </div>
  )
}

export default SignInLayout
