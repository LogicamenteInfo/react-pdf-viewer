import React from 'react';
import PropTypes from 'prop-types';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const RotateLeft = ({ css, rotationAngle, handleRotateLeft }) => {
  const rotateLeftClass = css
    || 'btn btn-sm btn-dark border-0 mx-1';

  if (rotationAngle === -90) {
    return (
      <button className={rotateLeftClass} disabled>
        <RotateLeftIcon />
      </button>
    );
  }

  return (
    <button className={rotateLeftClass} onClick={handleRotateLeft}>
      <RotateLeftIcon />
    </button>
  );
};

RotateLeft.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleRotateLeft: PropTypes.func.isRequired,
};

export default RotateLeft;
