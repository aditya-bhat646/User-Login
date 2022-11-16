/* eslint-disable no-console */
import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [addedUsers, setAddedUsers] = useState([]);

  const addedUsersHandler = (person) => {
    setAddedUsers((prevList) => ([...prevList, person]));
  };

  return (
    <>
      <AddUser onAddUsers={addedUsersHandler} />
      <UsersList users={addedUsers} />
    </>
  );
}

export default App;
