if ! type apollo 1>/dev/null; then
  echo "missing apollo, install with:"
  echo "yarn global add apollo"
  exit 127
fi

apollo client:download-schema --endpoint=https://graphql-pokemon.now.sh/ pokemonschema.graphql

apollo client:codegen --target typescript --localSchemaFile=pokemonschema.graphql --includes src/**/*.tsx --tagName=gql --addTypename --globalTypesFile=graphql-global-types.ts 

