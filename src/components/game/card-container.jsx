import PropTypes from "prop-types";
import shuffleArray from "../../util/shuffle-array";
import Card from "./card";

export default function CardContainer(props) {
  return (
    <main className="card-container">
      {props.gifs && shuffleArray(props.gifs).map(gif => {
        return (
          <Card
            key={gif.id}
            url={gif.images["480w_still"].url}
            onClick={props.handleClick}
            setClickedStatus={props.setClickedStatus}
            audio={props.audio}
          />
        );
      })}
    </main>
  );
}

CardContainer.propTypes = {
  gifs: PropTypes.array,
  audio: PropTypes.object,
  setClickedStatus: PropTypes.bool,
  handleClick: PropTypes.func,
};
