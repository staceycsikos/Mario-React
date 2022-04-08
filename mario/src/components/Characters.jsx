import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './characters.css'

export default function Characters({ data }) {
  
  const [uniqueCharacters, setUniqueCharacters] = useState([])
  
  useEffect(() => {
    let uniqueCharacterArray = [...new Map(data.map((char) => [char.character, char])).values()];
    console.log(uniqueCharacterArray)
    setUniqueCharacters(uniqueCharacterArray)    
  }, [data])
  
    return (
      <div className='name-container'> 
        <div>
          {uniqueCharacters.map((character) => (
            <div>
              <img src={character.image} alt={character.name}/>
              <Link to={`/characters/${character.character}`}>
                <button>{character.character}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}
