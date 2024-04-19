import PropTypes from "prop-types";
import { useState } from "react";
import Logo from "../logo";
import Card from "./card";

export default function GameScreen({ gifs, setEndGame, highestScore, setHighestScore }) {
  const [score, setScore] = useState(0);

  const handleClick = (clicked, setClicked) => {
    if (clicked) {
      if (score > highestScore) setHighestScore(score);
      return setEndGame(true); // causes a rerender
    }

    setScore(prev => prev + 1);
    setClicked(true);

    if (score === 10) {
      if (score > highestScore) setHighestScore(score);
      return setEndGame(true);
    }
  };

  return (
    <div className="game-screen">
      <header>
        <Logo />
        <div className="audio-control-container">
          <div>
            <label htmlFor="music">Music</label>
            <input type="radio" id="music" />
          </div>
          <div>
            <label htmlFor="sfx">Sfx</label>
            <input type="radio" id="sfx" />
          </div>
        </div>
        <div>
          <p>Score: {score}</p>
          <p>Highest Score: {highestScore}</p>
        </div>
      </header>
      <main className="card-container">
        {gifs && gifs.map(gif => {
          return <Card key={gif.id} url={gif.images["480w_still"].url} onClick={handleClick} />;
        })}
      </main>
    </div>
  );
}

GameScreen.propTypes = {
  gifs: PropTypes.array,
  setEndGame: PropTypes.func,
  highestScore: PropTypes.number,
  setHighestScore: PropTypes.func,
};
