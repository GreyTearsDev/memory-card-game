import PropTypes from "prop-types";
export default function AudioControl({ handleMusic, handleSFX, musicIsOn, sfxAreOn }) {
  return (
    <div className="audio-control-container">
      <div>
        <button className={musicIsOn ? "btn btn__sound--on" : "btn btn__sound--off"} onClick={handleMusic}>
          Music: {musicIsOn ? "ON" : "OFF"}
        </button>
        <button className={musicIsOn ? "btn btn__sound--on" : "btn btn__sound--off"} onClick={handleSFX}>
          Sfx: {sfxAreOn ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}

AudioControl.propTypes = {
  handleMusic: PropTypes.func,
  handleSFX: PropTypes.func,
  musicIsOn: PropTypes.bool,
  sfxAreOn: PropTypes.bool,
};
