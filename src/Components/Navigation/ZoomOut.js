import React from 'react';
import PropTypes from 'prop-types';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

const ZoomOut = ({
  css, scale, defaultScale, minScale, handleZoomOut,
}) => {
  const zoomOutClass = css
        || 'btn btn-sm btn-dark border-0 mx-1';

  let checkScale = minScale;
  if (defaultScale < minScale) {
    checkScale = defaultScale;
  }

  if (scale.toFixed(2) === checkScale.toFixed(2)) {
    return (
            <button type="button" className={zoomOutClass} disabled>
                <ZoomOutIcon />
            </button>
    );
  }

  return (
        <button type="button" className={zoomOutClass} onClick={handleZoomOut}>
            <ZoomOutIcon />
        </button>
  );
};

ZoomOut.propTypes = {
  css: PropTypes.string,
  scale: PropTypes.number.isRequired,
  defaultScale: PropTypes.number.isRequired,
  minScale: PropTypes.number.isRequired,
  handleZoomOut: PropTypes.func.isRequired,
};

export default ZoomOut;
