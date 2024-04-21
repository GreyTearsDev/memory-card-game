import PropTypes from "prop-types";
export default function AudioControl({ handleMusic, handleSFX, musicIsOn, sfxAreOn }) {
  return (
    <>
      <div>
        <button className={musicIsOn ? "btn--on" : "btn--off"} onClick={handleMusic}>
          Music: {musicIsOn ? "ON" : "OFF"}
        </button>
        <button className={musicIsOn ? "btn--on" : "btn--off"} onClick={handleSFX}>
          Sfx: {sfxAreOn ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
}

AudioControl.propTypes = {
  handleMusic: PropTypes.func,
  handleSFX: PropTypes.func,
  musicIsOn: PropTypes.bool,
  sfxAreOn: PropTypes.bool,
};
