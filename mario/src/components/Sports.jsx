import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './characters.css'

export default function Series({ data }) {
  const [uniqueCharacters, setUniqueCharacters] = useState()
  
  useEffect(() => {
    let uniqueCharacterArray = [...new Map(data.map((char) => [char.character, char])).values()];
    console.log(uniqueCharacterArray)
    setUniqueCharacters(uniqueCharacterArray)    
  }, [data])

     return (
      <div className='name-container'> 
        <div className='character-container'>
          {uniqueCharacters.map((character) => (
            <div className='characters'>
              <Link to={`/sports/${character.character}`}>
                <button className='character-btn'>{character.character}</button>
              </Link>
              <img src={character.image} alt={character.name}/>
            </div>
          ))}
        </div>
      </div>
  )
  
}
