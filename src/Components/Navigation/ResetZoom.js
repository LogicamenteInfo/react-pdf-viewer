import React from 'react';
import PropTypes from 'prop-types';
import RefreshIcon from '@material-ui/icons/Refresh';

const ResetZoom = ({
  css, scale, defaultScale, handleResetZoom,
}) => {
  const resetZoomClass = css
        || 'btn btn-sm btn-dark border-0 mx-1';

  if (scale.toFixed(2) === defaultScale.toFixed(2)) {
    return (
            <button className={resetZoomClass} disabled>
                <RefreshIcon />
            </button>
    );
  }

  return (
        <button className={resetZoomClass} onClick={handleResetZoom}>
            <RefreshIcon />
        </button>
  );
};

ResetZoom.propTypes = {
  css: PropTypes.string,
  scale: PropTypes.number.isRequired,
  defaultScale: PropTypes.number.isRequired,
  handleResetZoom: PropTypes.func.isRequired,
};

export default ResetZoom;
