import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KARIcon from '@material-ui/icons/KeyboardArrowRight';

const NextPageButton = ({
  css, page, pages, handleNextClick,
}) => {
  const nextClass = css || 'btn btn-sm btn-dark border-0';

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(true);
    handleNextClick();
    setTimeout(() => {
      setState(false);
    }, 200);
  };

  if (state || page === pages) {
    return (
            <button className={nextClass} disabled>
                <KARIcon />
            </button>
    );
  }

  return (
        <button className={nextClass} onClick={handleClick} disabled={state}>
            <KARIcon />
        </button>
  );
};
NextPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default NextPageButton;
