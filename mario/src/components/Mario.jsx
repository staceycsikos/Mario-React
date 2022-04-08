// import { useState } from "react"
// import { Link, Route, Routes} from "react-router-dom"

export default function Mario({data}) {
 
  return (
    <div>
      <div>
        {data.map((character) => (
          <div>
            <img src={character.image} alt={character.name}/>
          </div>
        ))}
      </div>
    </div>
  )
}