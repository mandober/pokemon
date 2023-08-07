import { useContext } from 'react'
import PokemonRow from './PokemonRow'
import { useSelector, useDispatch } from 'react-redux'

export default function PokemonTable() {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const filter = useSelector(state => state.filter)

  return (
    <>
      <table className="table1">
        <tbody>
          {pokemon &&
            pokemon
              .filter(pok =>
                pok.name.english.toLowerCase().includes(filter.toLowerCase())
              )
              .slice(0, 20)
              .map(p => (
                <PokemonRow
                  key={p.id}
                  pokemon={p}
                  onSelect={pokemon =>
                    dispatch({
                      type: 'SET_SELECTED_POKEMON',
                      payload: pokemon,
                    })
                  }
                />
              ))}
        </tbody>
      </table>
    </>
  )
}
