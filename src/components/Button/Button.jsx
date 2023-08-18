import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module/Button.module.css';

const Button = ({ onClick, shouldRender }) => (
  shouldRender ? (
    <button type="button" className={s.Button} onClick={onClick}>
      Load more
    </button>
  ) : null
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
};

export default Button;
