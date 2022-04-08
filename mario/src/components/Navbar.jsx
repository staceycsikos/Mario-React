import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <header>
        <h1>Mario's Infinite Worlds</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/characters">Character</Link>
          <Link to="/series">Game Series</Link>
        </nav>
      </header>
    </div>
      )
    
}
