import React from 'react';
import PropTypes from 'prop-types';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const ZoomIn = ({
  css, scale, defaultScale, maxScale, handleZoomIn,
}) => {
  const zoomInClass = css
        || 'btn btn-sm btn-dark border-0 mx-1';

  let checkScale = maxScale;
  if (defaultScale > maxScale) {
    checkScale = defaultScale;
  }

  if (scale.toFixed(2) === checkScale.toFixed(2)) {
    return (
            <button className={zoomInClass} disabled>
                <ZoomInIcon />
            </button>
    );
  }

  return (
        <button className={zoomInClass} onClick={handleZoomIn}>
            <ZoomInIcon />
        </button>
  );
};

ZoomIn.propTypes = {
  css: PropTypes.string,
  scale: PropTypes.number.isRequired,
  defaultScale: PropTypes.number.isRequired,
  maxScale: PropTypes.number.isRequired,
  handleZoomIn: PropTypes.func.isRequired,
};

export default ZoomIn;
