import { gql } from '@apollo/client'

export default gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      classification
      resistant
      weaknesses
      attacks {
        fast {
          name
          damage
        }
      }
    }
  }
`
