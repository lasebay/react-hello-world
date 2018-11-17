import React from 'react';
import { Link } from 'react-router-dom';
import SignInLayout from './SignInLayout';
import SignOutLayout from './SignOutLayout';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Grady</Link>
        <SignInLayout />
        <SignOutLayout />
      </div>
    </nav>
  )
}

export default NavBar
