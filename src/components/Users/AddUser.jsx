/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser({ onAddUsers }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(false);

  const nameChangeHandler = (event) => setName(event.target.value);
  const ageChangeHandler = (event) => setAge(event.target.value);

  const modalCloseHandler = () => setError(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // validation
    if (age >= 18 && name.trim() !== '') {
      // preparing for state lift}
      const id = Math.random();
      const person = { name, age, id };
      onAddUsers(person);

      // resetting onSubmit
      setName('');
      setAge('');
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
            onChange={nameChangeHandler}
            value={name}
          />
        </label>
        <label htmlFor="userage">
          Age (in Years)
          <input
            type="number"
            onChange={ageChangeHandler}
            value={age}
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
