/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pokemons
// ====================================================

export interface Pokemons_pokemons_attacks_fast {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface Pokemons_pokemons_attacks {
  __typename: "PokemonAttack";
  /**
   * The fast attacks of this Pokémon
   */
  fast: (Pokemons_pokemons_attacks_fast | null)[] | null;
}

export interface Pokemons_pokemons {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses: (string | null)[] | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: Pokemons_pokemons_attacks | null;
}

export interface Pokemons {
  pokemons: (Pokemons_pokemons | null)[] | null;
}

export interface PokemonsVariables {
  first: number;
}
