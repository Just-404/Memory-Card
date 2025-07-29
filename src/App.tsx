import fetchData from "./fetchData";
import type { Pokemons } from "./types/types";
import "./App.css";
import { useEffect, useState } from "react";
import PokemonSection from "./components/PokemonSection.tsx";
import Scoreboard from "./components/Scoreboard.tsx";

function App() {
  const NUMBERCARDS = 12;
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemons>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [clickedPokemons, setClickedPokemons] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    async function loadPokemons() {
      setLoading(true);
      const data = await fetchData(NUMBERCARDS);
      setPokemons(data);

      setLoading(false);
    }

    loadPokemons();
  }, []);

  const shuffleCards = () => {
    if (!pokemons?.length) return;

    const shuffledArray = [...pokemons];
    for (let i = pokemons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setPokemons(shuffledArray);
  };

  const endGame = () => {
    setBestScore((prev) => (prev < currentScore ? currentScore : prev));
    setCurrentScore(0);
    setClickedPokemons(new Set());
  };
  const handlePokemonClick = (name: string) => {
    setClickedPokemons((prev) => {
      if (prev.has(name)) {
        endGame();
        return new Set();
      }

      if (currentScore === NUMBERCARDS) {
        alert("You've chosen all cards without repeating! Good memory!");
        endGame();
        return new Set();
      }

      const newSet = new Set(prev).add(name);
      setCurrentScore((prevScore) => prevScore + 1);
      shuffleCards();
      return newSet;
    });
  };
  return (
    <>
      {loading ? (
        <p>fetching pokemons...</p>
      ) : (
        <>
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
          <PokemonSection
            pokemons={pokemons}
            onClickPokemon={handlePokemonClick}
          />
        </>
      )}
    </>
  );
}

export default App;
