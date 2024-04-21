import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Card({ audio, url, onClick, setClickedStatus }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (setClickedStatus) setClicked(false);
  }, [setClickedStatus]);

  const handleClick = () => {
    onClick(clicked, setClicked);
    audio.playSFXSound("click");
  };

  return (
    <div className="card">
      <img src={url} onClick={handleClick} />
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
  setClickedStatus: PropTypes.bool,
  audio: PropTypes.object,
};
