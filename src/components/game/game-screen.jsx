import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import shuffleArray from "../../util/shuffle-array";
import Logo from "../logo";
import AudioControl from "./audio-control";
import Card from "./card";

export default function GameScreen(props) {
  const [score, setScore] = useState(0);
  const [setClickedStatus, setSetClickedStatus] = useState(false);
  const [musicIsOn, setMusicIsOn] = useState(true);
  const [sfxAreOn, setSfxAreOn] = useState(true);

  useEffect(() => {
    props.audio.playMusic(musicIsOn);
    props.audio.playSFX(sfxAreOn);
  }, [musicIsOn, sfxAreOn]);

  const handleMusic = () => {
    setMusicIsOn(!musicIsOn);
  };

  const handleSFX = () => {
    setSfxAreOn(!sfxAreOn);
  };

  const handleClick = (clicked, setClicked) => {
    if (clicked) {
      props.onGameOver(score);
      setScore(0);
      return setSetClickedStatus(true);
    }

    setScore(prev => prev + 1);
    setClicked(true);

    if (score === 10) {
      props.onGameOver(score);
      setScore(0);
      return setSetClickedStatus(true);
    }
  };

  return (
    <div className="game-screen">
      <header>
        <Logo />
        <div className="audio-control-container">
          <AudioControl
            handleMusic={handleMusic}
            handleSFX={handleSFX}
            musicIsOn={musicIsOn}
            sfxAreOn={sfxAreOn}
          />
        </div>
        <div>
          <p>Score: {score}</p>
          <p>Highest Score: {props.highestScore}</p>
        </div>
      </header>

      <main className="card-container">
        {props.gifs && shuffleArray(props.gifs).map(gif => {
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
