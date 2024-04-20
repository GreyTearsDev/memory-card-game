import PropTypes from "prop-types";
import { useState } from "react";
import Logo from "../logo";
import Card from "./card";

export default function GameScreen({ gifs, highestScore, onGameOver }) {
  const [score, setScore] = useState(0);
  const [setClickedStatus, setSetClickedStatus] = useState(false);

  const handleClick = (clicked, setClicked) => {
    if (clicked) {
      onGameOver(score);
      setScore(0);
      return setSetClickedStatus(true);
    }

    setScore(prev => prev + 1);
    setClicked(true);

    if (score === 10) {
      onGameOver(score);
      setScore(0);
      return setSetClickedStatus(true);
    }
  };

  return (
    <div className="game-screen">
      <header>
        <Logo />
        <div className="audio-control-container">
          <div>
            <input type="checkbox" id="music" />
            <label htmlFor="music">Music</label>
          </div>
          <div>
            <input type="checkbox" id="sfx" />
            <label htmlFor="sfx">Sfx</label>
          </div>
        </div>
        <div>
          <p>Score: {score}</p>
          <p>Highest Score: {highestScore}</p>
        </div>
      </header>
      <main className="card-container">
        {gifs && gifs.map(gif => {
          return (
            <Card
              key={gif.id}
              url={gif.images["480w_still"].url}
              onClick={handleClick}
              setClickedStatus={setClickedStatus}
            />
          );
        })}
      </main>
    </div>
  );
}

GameScreen.propTypes = {
  gifs: PropTypes.array,
  highestScore: PropTypes.number,
  onGameOver: PropTypes.func,
};
