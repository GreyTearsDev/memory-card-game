import { useEffect, useState } from "react";
import EndScreen from "./components/end-menu/end-screen";
import GameScreen from "./components/game/game-screen";
import StartScreen from "./components/start-menu/start-screen";
import "./App.css";
import LoadingWidget from "./components/loading";
import GenerateAudioContext from "./util/audio";

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [currentFinalScore, setCurrentFinalScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gifs, setGifs] = useState(null);

  const audio = GenerateAudioContext();
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=Lfozesrhn1cf7UcN6t4bp1rib0jkXtJ1&q=cat&limit=10`;

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(response => setGifs(response.data));
  }, [apiURL]);

  const handleStartGame = () => {
    audio.playSFXSound("click");
    setStartGame(true);
  };

  const handleRestartGame = () => {
    audio.playSFXSound("click");
    setStartGame(true);
    setEndGame(false);
    setCurrentFinalScore(0);
  };

  const handleGameOver = (score) => {
    if (score > highestScore) {
      setTimeout(() => audio.playSFXSound("highScore"), 300);
      setHighestScore(score);
    } else {
      setTimeout(() => audio.playSFXSound("gameover"), 300);
    }
    setCurrentFinalScore(score);
    setStartGame(false);
    setEndGame(true);
  };

  return (
    <div>
      {!startGame && !endGame && <StartScreen onGameStart={handleStartGame} />}
      {startGame && !endGame && (gifs
        ? (
          <GameScreen
            gifs={gifs}
            highestScore={highestScore}
            onGameOver={handleGameOver}
            audio={audio}
          />
        )
        : <LoadingWidget />)}
      {!startGame && endGame && (
        <EndScreen
          currentFinalScore={currentFinalScore}
          onGameRestart={handleRestartGame}
          highestScore={highestScore}
        />
      )}
    </div>
  );
}

export default App;
