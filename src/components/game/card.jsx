import PropTypes from "react";
import { useState } from "react";

export default function Card({ key, url, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick(clicked, setClicked);
  };

  return (
    <div className="card">
      <img key={key} src={url} onClick={handleClick} />
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.string,
};
