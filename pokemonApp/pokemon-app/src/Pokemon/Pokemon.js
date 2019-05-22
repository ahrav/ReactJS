import React, { Suspense, useContext } from 'react'
import { createCache, createResource} from 'react-cache'
import WindowWidthContext from '../window-width-context'

let cache = createCache()

let PokemonResource = createResource((pokemonId) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res => res.json()))

const ImageResource = createResource(
  src =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.src = src;
    })
);

// suspending <Img /> component
const Img = ({ src, alt, ...rest }) => (
  <img src={ImageResource.read(cache,src)} alt={alt} {...rest} />
);

export const Detail = ({pokemonId}) => {
  let pokemon = PokemonResource.read(cache, pokemonId)
  const width = useContext(WindowWidthContext)

  const TypeItem = ({style, ...props}) => {
  

  return <li style={{
    backgroundColor: 'gray',
    display: 'inline-flex',
    marginRight: '.25em',
    borderRadius: '.25em',
    padding: '.5em 1em',
    color: 'white',
    ...style
  }} {...props}
  />
}

  return (
    <article>
      <section><h1>{pokemon.name}</h1></section>
      <section>
        <h2>Type</h2>
        <ul style={{padding: 0}}>
          {pokemon.types.map(({type}) => {
          switch(type.name) {
            case "grass":
              return <TypeItem style={{ backgroundColor: 'green'}}>{type.name}</TypeItem>
            case "poison":
              return <TypeItem style={{ backgroundColor: 'purple'}}>{type.name}</TypeItem>
            default:
              return <TypeItem type={type.name} key={type.name}>{type.name}</TypeItem>
          }
          }
          )}
        </ul>
      </section>
      <section>
        <Suspense fallback="Image loading" maxDuration={250}>
        <Img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
        </Suspense>
      </section>
      <section>
        <dl>
          <dt>Height</dt>
          <dd>{pokemon.height}</dd>
          <dt>Weight</dt>
          <dd>{pokemon.weight}</dd>
          <dt>Abilities</dt>
          <dd>
            <ul>
              {pokemon.abilities.map(({ability}) => <li key={ability.name}>{ability.name}</li>)}
            </ul>
          </dd>
        </dl>
      </section>
      <section>
        <h2>Stats</h2>
        <table>
          <tbody>
          <tr>
              {pokemon.stats.map( object => (<td key={object.stat.name}> {object.base_stat}</td>))}
            </tr>
          </tbody>
          <tfoot>
            <tr>
              {pokemon.stats.map(({ stat }) => (<th key={stat.name}> {stat.name}</th>))}
            </tr>
          </tfoot>
        </table>
      </section>
    </article>
  )
}

let PokemonCollectionResource = createResource(() => fetch('https://pokeapi.co/api/v2/pokemon/?limit=50').then(res => res.json()
).then( res => (
  {
    ...res,
    results: res.results.map(pokemon => ({
      ...pokemon,
      id: pokemon.url.split('/')[6]
    }))
  }
) )
)

export const ListItem = ({component: Component = 'li', className,  ...props}) => {
  return <Component className={["pokemon-list-item", className].join(' ')} {...props} />
}

export const List = ({renderItem}) => {
  return (
    <ul style={{listStyleType: 'none'}}>
    {PokemonCollectionResource.read(cache).results.map(renderItem)}
  </ul>
  )
}

export function ListError() {
    return <span>couldn't catch them all</span>
}
export function ListFallback() {
    return <span>Looking for pokemon</span>
}