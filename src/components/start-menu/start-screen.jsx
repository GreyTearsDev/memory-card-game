import PropTypes from "prop-types";
import Logo from "../logo";

export default function StartScreen({ onGameStart }) {
  return (
    <div className="start-screen">
      <div className="start-screen__menu">
        <div className="start-screen__menu__logo-wrapper">
          <h3>Welcome to</h3>
          <Logo />
        </div>
        <button type="button" onClick={onGameStart}>Start Game</button>
        <div className="credits">
          <p>
            Created by <a href="https://github.com/GreyTearsDev">Tirso Samalungo (GreyTearsDev)</a>
          </p>
          <p>
            Powered by <a href="https://giphy.com">GIPHY</a>
          </p>
        </div>
      </div>
    </div>
  );
}
StartScreen.propTypes = {
  onGameStart: PropTypes.func,
};
