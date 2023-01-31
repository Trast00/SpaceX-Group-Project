import React from 'react';
import './ListRocket.css';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, flickr_images, rocket_name, description,
  } = props.rocket;
  return (
    <div className="row rocket">
      <img src={flickr_images} alt={`Rocket ${rocket_name}`} />
      <div className="column rocket-description">
        <h4>{rocket_name}</h4>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propType = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    flickr_images: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};
export default Rocket;
