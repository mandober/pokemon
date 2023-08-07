import { useState, useEffect, useReducer } from 'react'
import PokemonInfo from './PokemonInfo'
import PokemonFilter from './PokemonFilter'
import PokemonTable from './PokemonTable'
import PokemonContext from './PokemonContext'
import './App.css'

const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: payload,
      }
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: payload,
      }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: payload,
      }
    default:
      throw new Error()
  }
}

export default function App() {
  // const [filter, filterSet] = useState('')
  // const [pokemon, pokemonSet] = useState(null)
  // const [selectedPokemon, selectedPokemonSet] = useState(null)
  const [state, dispatch] = useReducer(stateReducer, {
    filter: '',
    pokemon: [],
    selectedPokemon: null,
  })

  useEffect(() => {
    fetch('/pokemon.json')
      .then(resp => resp.json())
      .then(data => dispatch({
          type: "SET_POKEMON",
          payload: data,
        }))
  }, [])

  if (!state.pokemon) {
    return <div>Loading data...</div>
  }

  return (
    <>
      <PokemonContext.Provider
        value={{
          // filter,
          // pokemon,
          // filterSet,
          // pokemonSet,
          // selectedPokemon,
          // selectedPokemonSet,
          state,
          dispatch
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
