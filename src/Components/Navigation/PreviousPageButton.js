import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KALIcon from '@material-ui/icons/KeyboardArrowLeft';

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
  const prevClass = css || 'btn btn-sm btn-dark border-0';

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(true);
    handlePrevClick();
    setTimeout(() => {
      setState(false);
    }, 200);
  };

  if (state || page === 1) {
    return (
            <button type="button" className={prevClass} disabled>
                <KALIcon />
            </button>
    );
  }

  return (
        <button type="button" className={prevClass} onClick={handleClick}>
            <KALIcon />
        </button>
  );
};
PreviousPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
};

export default PreviousPageButton;
