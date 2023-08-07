import { useContext } from 'react'
import PokemonRow from './PokemonRow'
import PokemonContext from "./PokemonContext"

export default function PokemonTable() {
  const { filter, pokemon, selectedPokemonSet } = useContext(PokemonContext)

  return (
    <>
      <table className="table1">
        <tbody>
          {pokemon && pokemon
            .filter(pok =>
              pok.name.english.toLowerCase().includes(filter.toLowerCase())
            )
            .slice(0, 20)
            .map(p => (
              <PokemonRow
                key={p.id}
                pokemon={p}
                onSelect={p => selectedPokemonSet(p)}
              />
            ))}
        </tbody>
      </table>
    </>
  )
}
