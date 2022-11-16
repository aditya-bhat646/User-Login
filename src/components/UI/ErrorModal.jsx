/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import styles from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';

function Backdrop({ onModalClose }) {
  return (
    <div className={styles.backdrop} onClick={onModalClose} />
  );
}

function Overlay({ error, onModalClose }) {
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

function ErrorModal({ onModalClose, error }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={onModalClose} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Overlay onModalClose={onModalClose} error={error} />,
        document.getElementById('backdrop-root'),
      )}
    </>
  );
}

Overlay.propTypes = {
  error: PropTypes.instanceOf(Object),
  onModalClose: PropTypes.func,
};

Overlay.defaultProps = {
  error: {
    title: 'ErrorModal-prop_error-missing',
    message: 'ErrorModal-prop_error-missing',
  },
  onModalClose() {
    console.log('ErrorModal(Overlay)-prop-onCloseModal-missing');
  },
};

Backdrop.propTypes = {
  onModalClose: PropTypes.func,
};

Backdrop.defaultProps = {
  onModalClose() {
    console.log('ErrorModal(Backdrop)-Prop-onModalClose-missing');
  },
};

ErrorModal.propTypes = {
  error: PropTypes.instanceOf(Object).isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ErrorModal;
