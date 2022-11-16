/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './UsersList.module.css';

import Card from '../UI/Card';

function UsersList({ users }) {
  const list = (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{`${user.name} ${user.age} Years`}</div>
          </li>
        ))}
      </ul>
    </Card>
  );

  return list;
}

UsersList.propTypes = {
  users: PropTypes.instanceOf(Array),
};

UsersList.defaultProps = {
  users: [{
    username: 'UsersList-prop-users-missing',
    age: 'UsersList-prop-users-missing',
  }],
};

export default UsersList;
