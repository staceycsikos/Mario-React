import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './characters.css'

export default function Character({ data }) {
  const [filteredData, setFilteredData] = useState([])
  let { name } = useParams()

  useEffect(() => {
    let updatedData = data.filter((char) => char.character.includes(name))
    setFilteredData(updatedData)
  }, [data, name])
  
  return (
    <div className="character-container">
        {filteredData.map((character) => (
          <div className='image-container'>
            <img src={character.image} alt={character.name}/>
          </div>
        ))}
    </div>
  )
}
