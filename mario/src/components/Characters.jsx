import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Mario from './Mario.jsx'
import Luigi from './Luigi.jsx'
import Peach from './Peach.jsx'
import './characters.css'


export default function Characters({ data }) {
  const allCharacters = []
  data.map((character) => allCharacters.push(character))
  let marioData = allCharacters.filter(player => player.name.includes("Mario"))
  let luigiData = allCharacters.filter(player => player.name.includes("Luigi"))
  let peachData = allCharacters.filter(player => player.name.includes("Peach"))
  // let luigiData = allCharacters.filter(player => player.name.includes("Luigi"))
  

  
    return (
      <div className='name-container'>
        <Link className='button' to="*/mario">Mario</Link> 
        <Link className='button' to="*/luigi">Luigi</Link>
        <Link className='button' to="*/peach">Peach</Link>
        <Link className='button' to="*/bo">bo</Link>
        <Routes>
          <Route path="*/mario" element={<Mario data={marioData}/>} />
          <Route path="*/luigi" element={<Luigi data={luigiData}/>} />
          <Route path="*/peach" element={<Peach data={peachData}/>} />
        </Routes>
      </div>
  )
}
