import React, { useEffect, useState } from 'react';

import './App.css';
import { List } from './List';

const fakeUsers = [
  {
    id: '1',
    name: 'Grr',
  },
  {
    id: '2',
    name: 'Pinochio',
  },
];

const getFakeUsers = () =>
  new Promise((resolve) => setTimeout(() => resolve(fakeUsers), 1000));

const updateFakeUsersName = ({ users, id, name }) => {
  const newUsers = users.map((user) =>
    user.id === id ? { ...user, name } : user
  );
  return new Promise((resolve) => setTimeout(() => resolve(newUsers), 1000));
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersApi = await getFakeUsers();
      setUsers(usersApi);
    };
    fetchUsers();
  }, []);

  async function handleUpdateName(id, name) {
    const newUsers = await updateFakeUsersName({ users, id, name });
    setUsers(newUsers);
  }

  return (
    <div className='App'>
      <h1>Derive State from Props in React</h1>
      <header className='App-header'>
        <List list={users} onUpdateName={handleUpdateName} />
      </header>
    </div>
  );
}

export default App;
