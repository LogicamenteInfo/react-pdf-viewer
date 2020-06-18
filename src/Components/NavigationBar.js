import React from 'react';
import PropTypes from 'prop-types';
import NextPageButton from './Navigation/NextPageButton';
import PagesIndicator from './Navigation/PagesIndicator';
import PreviousPageButton from './Navigation/PreviousPageButton';
import ZoomIn from './Navigation/ZoomIn';
import ZoomOut from './Navigation/ZoomOut';
import ResetZoom from './Navigation/ResetZoom';
import RotateLeft from './Navigation/RotateLeft';
import ResetRotation from './Navigation/ResetRotation';
import RotateRight from './Navigation/RotateRight';

const Navigation = ({
  page,
  pages,
  scale,
  defaultScale,
  maxScale,
  minScale,
  rotationAngle,
  hideZoom,
  hideRotation,
  css,
  handlePrevClick,
  handleNextClick,
  handleZoomIn,
  handleResetZoom,
  handleZoomOut,
  handleRotateLeft,
  handleResetRotation,
  handleRotateRight,
}) => (
        <div
            className={`row ${css.navbarWrapper || 'text-white bg-dark py-4'}`}>
            {hideZoom ? (
                <div className='col-4'></div>
            ) : (
                <div className='col-4'>
                    <ZoomOut
                        scale={scale}
                        minScale={minScale}
                        defaultScale={defaultScale}
                        css={css.zoomOutBtn}
                        handleZoomOut={handleZoomOut}
                    />
                    <ResetZoom
                        scale={scale}
                        defaultScale={defaultScale}
                        css={css.resetZoomBtn}
                        handleResetZoom={handleResetZoom}
                    />
                    <ZoomIn
                        scale={scale}
                        maxScale={maxScale}
                        defaultScale={defaultScale}
                        css={css.zoomInBtn}
                        handleZoomIn={handleZoomIn}
                    />
                </div>
            )}
            <div className='col-4'>
                <PreviousPageButton
                    css={css.previousPageBtn}
                    page={page}
                    pages={pages}
                    handlePrevClick={handlePrevClick}
                />
                <PagesIndicator
                    css={css.pageIndicator}
                    page={page}
                    pages={pages}
                />
                <NextPageButton
                    css={css.nextPageBtn}
                    page={page}
                    pages={pages}
                    handleNextClick={handleNextClick}
                />
            </div>
            {hideRotation ? (
                <div className='col-4'></div>
            ) : (
                <div className='col-4'>
                    <RotateLeft
                        css={css.rotateLeftBtn}
                        rotationAngle={rotationAngle}
                        handleRotateLeft={handleRotateLeft}
                    />
                    <ResetRotation
                        css={css.resetRotationBtn}
                        rotationAngle={rotationAngle}
                        handleResetRotation={handleResetRotation}
                    />
                    <RotateRight
                        css={css.rotateRightBtn}
                        rotationAngle={rotationAngle}
                        handleRotateRight={handleRotateRight}
                    />
                </div>
            )}
        </div>
);

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  scale: PropTypes.number,
  defaultScale: PropTypes.number,
  maxScale: PropTypes.number,
  minScale: PropTypes.number,
  rotationAngle: PropTypes.number,
  hideZoom: PropTypes.bool,
  hideRotation: PropTypes.bool,

  css: PropTypes.shape({
    navbarWrapper: PropTypes.string,
    pages: PropTypes.string,
    pageIndicator: PropTypes.string,
    previousPageBtn: PropTypes.string,
    nextPageBtn: PropTypes.string,
    zoomOutBtn: PropTypes.string,
    resetZoomBtn: PropTypes.string,
    zoomInBtn: PropTypes.string,
    rotateLeftBtn: PropTypes.string,
    resetRotationBtn: PropTypes.string,
    rotateRightBtn: PropTypes.string,
  }),

  elements: PropTypes.shape({
    previousPageBtn: PropTypes.any,
    nextPageBtn: PropTypes.any,
    pages: PropTypes.any,
  }),

  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleZoomIn: PropTypes.func.isRequired,
  handleResetZoom: PropTypes.func.isRequired,
  handleZoomOut: PropTypes.func.isRequired,
  handleRotateLeft: PropTypes.func.isRequired,
  handleResetRotation: PropTypes.func.isRequired,
  handleRotateRight: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  css: {},
  elements: {},
};

export default Navigation;
