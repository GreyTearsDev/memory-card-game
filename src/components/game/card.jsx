import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Card({ url, onClick, setClickedStatus }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick(clicked, setClicked);
  };

  useEffect(() => {
    if (setClickedStatus) setClicked(false);
  }, [setClickedStatus]);

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
};
