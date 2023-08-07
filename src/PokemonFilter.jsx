import { useContext } from 'react'
import PokemonContext from './PokemonContext'

const PokemonFilter = () => {
  // const { filter, filterSet } = useContext(PokemonContext)
  const { state, dispatch } = useContext(PokemonContext)

  return (
    <input
      type="text"
      value={state.filter}
      onChange={e =>
        dispatch({
          type: 'SET_FILTER',
          payload: e.target.value,
        })
      }
    />
  )
}

export default PokemonFilter
