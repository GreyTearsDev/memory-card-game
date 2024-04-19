import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({ url, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick(clicked, setClicked);
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
};
