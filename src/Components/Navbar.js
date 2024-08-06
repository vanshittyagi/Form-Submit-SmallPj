import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar' >
        <div className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </div>
        <div className="content">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
