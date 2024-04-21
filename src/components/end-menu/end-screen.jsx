import PropTypes from "prop-types";

export default function EndScreen({ onGameRestart }) {
  return (
    <>
      <h1>Game over</h1>
      <button type="button" onClick={onGameRestart}>Restart game</button>
    </>
  );
}

EndScreen.propTypes = {
  onGameRestart: PropTypes.func,
};
