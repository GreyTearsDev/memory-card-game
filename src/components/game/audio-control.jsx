import PropTypes from "prop-types";
export default function AudioControl({ handleMusic, handleSFX, musicIsOn, sfxAreOn }) {
  return (
    <div className="audio-control-container">
      <button
        className="btn btn__sound"
        onClick={handleMusic}
      >
        Music: {musicIsOn ? "ON" : "OFF"}
      </button>
      <button
        className="btn btn__sound"
        onClick={handleSFX}
      >
        Sfx: {sfxAreOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

AudioControl.propTypes = {
  handleMusic: PropTypes.func,
  handleSFX: PropTypes.func,
  musicIsOn: PropTypes.bool,
  sfxAreOn: PropTypes.bool,
};
