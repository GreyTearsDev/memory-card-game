import { useEffect, useState } from "react";
import GameScreen from "./components/game/game-screen";
import "./App.css";

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [gifs, setGifs] = useState(null);
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=Lfozesrhn1cf7UcN6t4bp1rib0jkXtJ1&q=cat&limit=10`;

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(response => setGifs(response.data));
  }, []);

  return (
    <>
      <GameScreen gifs={gifs} setEndGame={setEndGame} highestScore={highestScore} setHighestScore={setHighestScore} />
    </>
  );
}

export default App;
