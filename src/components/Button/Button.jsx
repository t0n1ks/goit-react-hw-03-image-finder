import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module/Button.module.css';

const LoadMoreButton = ({ onClick }) => (
  <button type="button" className={s.Button} onClick={onClick}>
    Load more
  </button>
);

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
