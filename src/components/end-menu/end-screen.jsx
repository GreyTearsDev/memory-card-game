import PropTypes from "prop-types";

export default function EndScreen({ onGameRestart, highestScore, currentFinalScore }) {
  const getStars = () => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      (i < (currentFinalScore / 2)) ? stars += "⭐️" : stars += "☆";
    }
    return stars;
  };
  return (
    <>
      <h1>Game over</h1>
      <div>
        <h1>{getStars()}</h1>
        <h4>Score: {currentFinalScore}</h4>
      </div>
      <p>HighestScore: {highestScore}</p>
      <button type="button" onClick={onGameRestart}>Restart game</button>
    </>
  );
}

EndScreen.propTypes = {
  onGameRestart: PropTypes.func,
  highestScore: PropTypes.number,
  currentFinalScore: PropTypes.number,
};
