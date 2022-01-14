import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const API_URL = `https://pokeapi.co/api/v2/pokemon`
    fetch(API_URL)
      .then(res => res.json())
      .then(res => setData(res))
    setIsLoading(true)
  }, [])

  const pokemons = data
  console.log(pokemons)

  return (
    <>
      <h1>Pokémon</h1>
      <ul>
        {data &&
          pokemons.results.map((item, i) => (
              <p key={i}>Nom du pokémon : {item.name}</p>
          ))}
      </ul>
    </>
  )
}

export default Home
