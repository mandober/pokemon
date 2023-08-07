import { useState, useEffect } from 'react'
import PokemonInfo from './PokemonInfo'
import PokemonFilter from './PokemonFilter'
import PokemonTable from './PokemonTable'
import PokemonContext from './PokemonContext'
import './App.css'

export default function App() {
  const [filter, filterSet] = useState('')
  const [pokemon, pokemonSet] = useState(null)
  const [selectedPokemon, selectedPokemonSet] = useState(null)

  useEffect(() => {
    fetch('/pokemon.json')
      .then(resp => resp.json())
      .then(data => pokemonSet(data))
  }, [])

  if (!pokemon) {
    return <div>Loading data...</div>
  }

  return (
    <>
      <PokemonContext.Provider
        value={{
          filter,
          pokemon,
          filterSet,
          pokemonSet,
          selectedPokemon,
          selectedPokemonSet,
        }}
      >
        <div className="tbl">
          <h1 className="title">Pokemon Search</h1>
          <div className="wrap">
            <div>
              <PokemonFilter />
              <PokemonTable />
            </div>
            <PokemonInfo />
          </div>
        </div>
      </PokemonContext.Provider>
    </>
  )
}
