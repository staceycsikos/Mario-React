import React from 'react'
import { Link } from 'react-router-dom'
import './characters.css'


export default function Navbar() {
  return (
    <div>
      <header>
        <h1 className='title'>Mario's World</h1>
        <hr></hr>
        <nav className='btn-container'>
          <Link to="/"><button className='nav-btn'>Home</button></Link>
          <Link to="/characters"><button className='nav-btn'>Super Mario</button></Link>
        </nav>
      </header>
    </div>
      )
    
}
