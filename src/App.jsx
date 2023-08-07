import { useState, useEffect, useReducer } from 'react'
import PokemonInfo from './PokemonInfo'
import PokemonFilter from './PokemonFilter'
import PokemonTable from './PokemonTable'
// import PokemonContext from './PokemonContext'
import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const stateReducer = (
  state = { pokemon: [], filter: '', selectedPokemon: null },
  { type, payload }
) => {
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
      return state
  }
}

const store = createStore(stateReducer)

function App() {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)

  useEffect(() => {
    fetch('/pokemon.json')
      .then(resp => resp.json())
      .then(data =>
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        })
      )
  }, [])

  if (!pokemon) {
    return <div>Loading data...</div>
  }

  return (
    <>
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
    </>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
