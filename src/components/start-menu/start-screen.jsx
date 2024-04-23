import PropTypes from "prop-types";
import Credits from "../credits";
import Logo from "../logo";

export default function StartScreen({ onGameStart }) {
  return (
    <div className="start-screen">
      <Logo />
      <button className="btn btn__main" type="button" onClick={onGameStart}>Start Game</button>
      <Credits />
    </div>
  );
}
StartScreen.propTypes = {
  onGameStart: PropTypes.func,
};
