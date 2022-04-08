import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Mario from './Mario.jsx'



export default function Characters({ data }) {
  const allCharacters = []
  data.map((character) => allCharacters.push(character))
  let marioData = allCharacters.filter(player => player.name.includes("Mario"))
  console.log(marioData)
  let luigiData = allCharacters.filter(player => player.name.includes("Luigi"))
  

  
    return (
      <div>
        <Link to="/characters/mario">Mario</Link> 
        <Link to="/characters/luigi">Luigi</Link>
        <Routes>
          <Route path="/characters/mario" element={<Mario data={marioData}/>} />
          <Route path="/characters/luigi" element={<Mario data={luigiData}/>} />
        </Routes>
    </div>
  )
}
