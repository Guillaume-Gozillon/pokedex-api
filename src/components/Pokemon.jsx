import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const url = useParams()
  console.log(url)
  return <div></div>
}

export default Pokemon
