import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Logo from "../logo";
import AudioControl from "./audio-control";
import CardContainer from "./card-container";

export default function GameScreen(props) {
  const [score, setScore] = useState(0);
  const [setClickedStatus, setSetClickedStatus] = useState(false);
  const [musicIsOn, setMusicIsOn] = useState(true);
  const [sfxAreOn, setSfxAreOn] = useState(true);

  useEffect(() => {
    props.audio.playMusic(musicIsOn);
    props.audio.playSFX(sfxAreOn);
  }, [musicIsOn, sfxAreOn, props.audio]);

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
      props.audio.stopPlayingMusic();
      setSetClickedStatus(true);
      return;
    }

    setScore(prev => prev + 1);
    setClicked(true);

    if (score === 9) {
      props.onGameOver(score + 1);
      setScore(0);
      props.audio.stopPlayingMusic();
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

      <CardContainer
        handleClick={handleClick}
        setClickedStatus={setClickedStatus}
        audio={props.audio}
        gifs={props.gifs}
      />
    </div>
  );
}

GameScreen.propTypes = {
  audio: PropTypes.object,
  gifs: PropTypes.array,
  highestScore: PropTypes.number,
  onGameOver: PropTypes.func,
};
