/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';

function ErrorModal({ error, onModalClose }) {
  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={onModalClose}
      />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button
            type="button"
            onClick={onModalClose}
          >
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
}

ErrorModal.propTypes = {
  error: PropTypes.instanceOf(Object),
  onModalClose: PropTypes.func,
};

ErrorModal.defaultProps = {
  error: {
    title: 'ErrorModal-prop_error-missing',
    message: 'ErrorModal-prop_error-missing',
  },
  onModalClose() {
    console.log('ErrorModal-prop-onCloseModal-missing');
  },
};

export default ErrorModal;
