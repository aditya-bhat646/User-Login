/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

function AddUser({ onAddUsers }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => setName(event.target.value);
  const ageChangeHandler = (event) => setAge(event.target.value);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // validation
    if (age >= 18 && name.trim() !== '') {
      // preparing for state lift
      const id = Math.random();
      const person = { name, age, id };
      onAddUsers(person);

      // resetting onSubmit
      setName('');
      setAge('');
    }
  };

  return (
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
