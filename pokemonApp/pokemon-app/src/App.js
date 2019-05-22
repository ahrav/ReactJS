import React, { useState, Suspense } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { 
  ListFallback as PokemonListFallback, ListError as PokemonListError, ListItem as PokemonListItem, List as PokemonList, Detail as PokemonDetail 
} from './Pokemon/Pokemon'
import { useWindowWidth } from './hooks/windowSize'
import WindowWithContext from './window-width-context'


const app = props => {
  const [pokemonId, setPokemonId] = useState(0)
  const width = useWindowWidth()

    return (
      <WindowWithContext.Provider value={width}>
      <div>
        <h1 className="Title">Pokemon App</h1>
        <ErrorBoundary fallback={<PokemonListError />}>
        {pokemonId > 0 ? (
          <Suspense fallback={"Finding your pokemon"}>
            <div>
              <button type="button" onClick={() => setPokemonId(-1)}>
                <span role="img">👈</span> Back
              </button>
              <PokemonDetail pokemonId={pokemonId} />
            </div>
            </Suspense>
        ) : (
          <Suspense fallback={<PokemonListFallback />}>
              <PokemonList renderItem={pokemon => (
              <PokemonListItem onClick={() => setPokemonId(pokemon.id)} key={pokemon.id}>{pokemon.name}</PokemonListItem>
            )} />
          </Suspense>
        )}
        </ErrorBoundary>
      </div>
      </WindowWithContext.Provider>
    );
}

export default app;
