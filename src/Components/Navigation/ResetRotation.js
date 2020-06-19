import React from 'react';
import PropTypes from 'prop-types';
import RefreshIcon from '@material-ui/icons/Refresh';

const ResetRotation = ({ css, rotationAngle, handleResetRotation }) => {
  const resetRotationClass = css
        || 'btn btn-sm btn-dark border-0 mx-1';

  if (rotationAngle === 0) {
    return (
            <button type="button" className={resetRotationClass} disabled>
                <RefreshIcon />
            </button>
    );
  }

  return (
        <button type="button" className={resetRotationClass} onClick={handleResetRotation}>
            <RefreshIcon />
        </button>
  );
};
ResetRotation.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleResetRotation: PropTypes.func.isRequired,
};

export default ResetRotation;
