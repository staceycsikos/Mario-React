export default function Luigi({data}) {
 
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