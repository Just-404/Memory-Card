function getRandomIds(arrayLength: number, totalPokemons: number) {
  const ids = new Set<number>();
  while (ids.size < arrayLength) {
    ids.add(Math.floor(Math.random() * totalPokemons) + 1);
  }
  return Array.from(ids);
}

async function fetchPokemon(pokemonId: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) =>
    res.json()
  );
}

// To only return the name and imgUrl
function getCleanPokemonOutput(
  pokemons: any[]
): { name: string; imgUrl: string }[] {
  return pokemons.map((pokemon) => ({
    name: pokemon.name,
    imgUrl:
      pokemon.sprites.other["official-artwork"].front_default ||
      pokemon.sprites.front_default,
  }));
}
export default async function fetchData(pokemonsRequested: number) {
  const totalPokemons = 1025;
  // Get random pokemons each page load
  const randomIds = getRandomIds(pokemonsRequested, totalPokemons);
  try {
    const pokemonPromises = randomIds.map((id) => fetchPokemon(id));

    const pokemons = await Promise.all(pokemonPromises);
    return getCleanPokemonOutput(pokemons);
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    else console.error("An error occurred", error);
    return null;
  }
}
