import { LayoutGroup, motion } from "framer-motion";
import type { Pokemons, Pokemon } from "../types/types";
import PokeCard from "./PokeCard";

export default function PokemonSection({
  pokemons,
  onClickPokemon,
}: {
  pokemons: Pokemons;
  onClickPokemon: (name: string) => void;
}) {
  return (
    <LayoutGroup>
      <motion.main className="pokemons-container" layout>
        {pokemons?.map((pokemon: Pokemon) => (
          <PokeCard
            key={pokemon.name}
            {...pokemon}
            onClickPokemon={onClickPokemon}
          />
        ))}
      </motion.main>
    </LayoutGroup>
  );
}
