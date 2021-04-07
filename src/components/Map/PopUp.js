import React from 'react';
import PropTypes from 'prop-types';

const PopUp = (props) => {

  const [longitude, latitude] = props.feature.geometry.coordinates;
  const { id, name, description } = props.feature.properties;

  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      <p>{"Longitude: " + longitude.toFixed(3)}</p>
      <p>{"Latitude: " + latitude.toFixed(3)}</p>
    </div>
  );
};

PopUp.propTypes = {
};

PopUp.defaultProps = {
};

export default PopUp;