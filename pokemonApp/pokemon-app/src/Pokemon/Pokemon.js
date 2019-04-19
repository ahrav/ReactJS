import React from 'react'
import { createCache, createResource} from 'react-cache'

let cache = createCache()

let PokemonResource = createResource((pokemonId) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res => res.json()))

export const Detail = ({pokemonId}) => {
  let pokemon = PokemonResource.read(cache, pokemonId).name
  return (
    <article>{pokemon}</article>
  )
}

let PokemonCollectionResource = createResource(() => fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json()))

export const ListItem = ({component: Component = 'li', className,  ...props}) => {
  return <Component className={["pokemon-list-item", className].join(' ')} {...props} />
}

export const List = ({renderItem}) => {
  return (
    <ul>
    {PokemonCollectionResource.read(cache).results.map(pokemon => renderItem({id: pokemon.url.split('/')[6],...pokemon}))}
  </ul>
  )
}

export function ListError() {
    return <span>couldn't catch them all</span>
}
export function ListFallback() {
    return <span>Looking for pokemon</span>
}