import React from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import PokemonList from './PokemonList'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
  cache: new InMemoryCache()
})

function App () {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header' />
        <PokemonList />
      </div>
    </ApolloProvider>
  )
}

export default App
