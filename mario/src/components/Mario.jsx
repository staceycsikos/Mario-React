// import { useState } from "react"
// import { Link, Route, Routes} from "react-router-dom"
import './characters.css'

export default function Mario({data}) {
 
  return (
    <div className="character-container">
        {data.map((character) => (
          <div>
            <img src={character.image} alt={character.name}/>
          </div>
        ))}
    </div>
  )
}