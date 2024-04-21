import PropTypes from "prop-types";
export default function AudioControl({ audio }) {
  const handleMusicVolume = (e) => audio.updateMusicVolume(e.target.value / 100);
  const handleSFXVolume = (e) => audio.updateSFXVolume(e.target.value / 100);
  return (
    <>
      <div>
        <input type="range" min={0} max={100} id="music" onChange={handleMusicVolume} />
        <label htmlFor="music">Music</label>
      </div>
      <div>
        <input type="range" min={0} max={100} id="sfx" onChange={handleSFXVolume} />
        <label htmlFor="sfx">Sfx</label>
      </div>
    </>
  );
}

AudioControl.propTypes = {
  audio: PropTypes.object,
};
