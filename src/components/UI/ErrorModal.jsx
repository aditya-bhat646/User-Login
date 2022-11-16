import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';

function ErrorModal({ errorTitle, errorMessage }) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{errorTitle}</h2>
      </header>
      <div className={styles.content}>
        <p>{errorMessage}</p>
      </div>
      <footer className={styles.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
}

ErrorModal.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  errorTitle: PropTypes.string.isRequired,
};

export default ErrorModal;
