import PropTypes from "prop-types";
import Logo from "../logo";

export default function StartScreen({ onGameStart }) {
  return (
    <div className="start-screen">
      <Logo />
      <button type="button" onClick={onGameStart}>Start Game</button>

      <div className="credits">
        <div className="credits__github">
          <p>
            Created by <a href="https://github.com/GreyTearsDev">Tirso Samalungo (GreyTearsDev)</a>
          </p>
        </div>
        <div className="credits__giphy">
          <p>Powered by</p>
          <div>
            <a href="https://giphy.com">
              <img src="/assets/icons/giphy-logo.png"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
StartScreen.propTypes = {
  onGameStart: PropTypes.func,
};
