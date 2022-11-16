/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser({ onAddUsers }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(false);

  const modalCloseHandler = () => setError(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const age = ageInputRef.current.value;
    const name = nameInputRef.current.value;

    // validation
    if (age >= 18 && name.trim() !== '') {
      // preparing for state lift}
      const id = Math.random();
      const person = { name, age, id };
      onAddUsers(person);

      // resetting onSubmit
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    } else {
      // setting Error State to use in ErrorModal
      setError({
        title: 'Invalid Inputs',
        message: 'Inputs should be non-empty and Age > 18',
      });
    }
  };

  let displayedContent = (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            ref={nameInputRef}
          />
        </label>
        <label htmlFor="userage">
          Age (in Years)
          <input
            type="number"
            ref={ageInputRef}
          />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );

  if (error) {
    displayedContent = <ErrorModal error={error} onModalClose={modalCloseHandler} />;
  }

  return displayedContent;
}

AddUser.propTypes = {
  onAddUsers: PropTypes.func,
};

AddUser.defaultProps = {
  onAddUsers(usersList) {
    console.log('AddUser-prop-onAddUser-missing');
    console.log('usersList-stateLift', usersList);
  },
};

export default AddUser;
