import React from 'react';
import PropTypes from 'prop-types';
import RotateRightIcon from '@material-ui/icons/RotateRight';

const RotateRight = ({ css, rotationAngle, handleRotateRight }) => {
  const rotateRightClass = css
        || 'btn btn-sm btn-dark border-0 mx-1';

  if (rotationAngle === 90) {
    return (
            <button className={rotateRightClass} disabled>
               <RotateRightIcon />
            </button>
    );
  }

  return (
        <button className={rotateRightClass} onClick={handleRotateRight}>
            <RotateRightIcon />
        </button>
  );
};
RotateRight.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleRotateRight: PropTypes.func.isRequired,
};

export default RotateRight;
