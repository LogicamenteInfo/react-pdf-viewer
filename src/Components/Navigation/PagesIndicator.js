import React from 'react';
import PropTypes from 'prop-types';

const PagesIndicator = ({ css, page, pages }) => {
  const pagesClass = css
        || 'text-center pt-1 btn btn-sm btn-dark border-0 mx-3';

  return <span className={pagesClass}>{`Página ${page} / ${pages}`}</span>;
};

PagesIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default PagesIndicator;
