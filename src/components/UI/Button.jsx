/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ type, onClick, children }) {
  return (
    <button
      className={styles.button}
      type={`${type}` || 'button'}
      onClick={onClick || null}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick() {},
};

export default Button;
