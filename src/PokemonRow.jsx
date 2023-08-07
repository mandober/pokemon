
export default function PokemonRow({ pokemon, onSelect }) {
  return (
    <>
      <tr key={pokemon.id}>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
        <td><button onClick={() => onSelect(pokemon)}>More…</button></td>
      </tr>
    </>
  )
}
