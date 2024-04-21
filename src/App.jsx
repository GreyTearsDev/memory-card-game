import { useEffect, useState } from "react";
import EndScreen from "./components/end-menu/end-screen";
import GameScreen from "./components/game/game-screen";
import StartScreen from "./components/start-menu/start-screen";
import "./App.css";
import GenerateAudioContext from "./util/audio";

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gifs, setGifs] = useState(null);

  const audio = GenerateAudioContext();
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=Lfozesrhn1cf7UcN6t4bp1rib0jkXtJ1&q=cat&limit=10`;

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(response => setGifs(response.data));
  }, []);

  const handleStartGame = () => {
    setStartGame(true);
  };

  const handleRestartGame = () => {
    setStartGame(true);
    setEndGame(false);
  };

  const handleGameOver = (score) => {
    if (score > highestScore) {
      audio.playSFXSound("highScore");
      setHighestScore(score);
    }
    setStartGame(false);
    setEndGame(true);
  };
  return (
    <div>
      {!startGame && !endGame && <StartScreen onGameStart={handleStartGame} />}
      {startGame && !endGame && (
        <GameScreen
          gifs={gifs}
          highestScore={highestScore}
          onGameOver={handleGameOver}
          audio={audio}
        />
      )}
      {!startGame && endGame && <EndScreen onGameRestart={handleRestartGame} />}
    </div>
  );
}

export default App;
