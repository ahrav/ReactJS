import React, { useState, Suspense } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { 
  ListFallback as PokemonListFallback, ListError as PokemonListError, ListItem as PokemonListItem, List as PokemonList, Detail as PokemonDetail 
} from './Pokemon/Pokemon'


const app = props => {
  const [pokemonId, setPokemonId] = useState(1)
    return (
      <div>
        <h1>Pokemon App...</h1>
        <ErrorBoundary fallback={<PokemonListError />}>
          <Suspense fallback={<PokemonListFallback />}>
            <strong>Selected Pokemon id: {pokemonId}</strong>
            <PokemonDetail pokemonId={pokemonId} />
              <PokemonList renderItem={pokemon => (
              <PokemonListItem onClick={() => setPokemonId(pokemon.id)} key={pokemon.id}>{pokemon.name}</PokemonListItem>
            )} />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
}

export default app;
