import fetchData from "./fetchData";

import "./App.css";
import { useEffect, useState } from "react";

type Pokemons =
  | {
      name: string;
      imgUrl: string;
    }[]
  | null;

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
  return <>{loading && <p>fetching pokemons...</p>}</>;
}

export default App;
