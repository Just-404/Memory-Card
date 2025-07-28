import type { Pokemons, Pokemon } from "../types/types";
import PokeCard from "./PokeCard";

export default function PokemonSection({ pokemons }: { pokemons: Pokemons }) {
  return (
    <main className="pokemons-container">
      {pokemons?.map((pokemon: Pokemon, idx) => (
        <PokeCard key={idx} {...pokemon} />
      ))}
    </main>
  );
}
