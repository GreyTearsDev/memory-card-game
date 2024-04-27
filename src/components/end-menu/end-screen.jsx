import PropTypes from "prop-types";
import Credits from "../credits";

export default function EndScreen({ onGameRestart, highestScore, currentFinalScore }) {
  const getStars = () => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      (i < (currentFinalScore / 2)) ? stars += "⭐️" : stars += "★";
    }
    return stars;
  };
  return (
    <div className="end-screen">
      <div className="end-screen__pannel">
        <h1>Game over</h1>
        <h1>{getStars()}</h1>
        <h4>Score: {currentFinalScore}</h4>
        <h3>Highest Score: {highestScore}</h3>
      </div>
      <button className="btn btn__main" type="button" onClick={onGameRestart}>Restart game</button>
      <Credits />
    </div>
  );
}

EndScreen.propTypes = {
  onGameRestart: PropTypes.func,
  highestScore: PropTypes.number,
  currentFinalScore: PropTypes.number,
};
