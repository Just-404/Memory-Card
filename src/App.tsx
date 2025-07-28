import fetchData from "./fetchData";
import type { Pokemons } from "./types/types";
import "./App.css";
import { useEffect, useState } from "react";
import PokemonSection from "./components/PokemonSection.tsx";

function App() {
  const NUMBERCARDS = 12;
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemons>(null);

  useEffect(() => {
    async function loadPokemons() {
      setLoading(true);
      const data = await fetchData(NUMBERCARDS);
      setPokemons(data);

      setLoading(false);
    }

    loadPokemons();
  }, []);
  return (
    <>
      {loading ? (
        <p>fetching pokemons...</p>
      ) : (
        <PokemonSection pokemons={pokemons} />
      )}
    </>
  );
}

export default App;
