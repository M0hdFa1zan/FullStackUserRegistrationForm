import React, { useState, useEffect } from 'react';
import "./App.css"
import { fetchUsers, addUser, updateUser, deleteUser } from './api/userApi';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const userList = await fetchUsers();
    setUsers(userList);
  };

  const handleAddUser = async (userData) => {
    const newUser = await addUser(userData);
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = async (id, updatedData) => {
    const updatedUser = await updateUser(id, updatedData);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <div className='app'>
      <div className='user-form'>
        <UserForm
          onAddUser={handleAddUser}
          onUpdateUser={handleUpdateUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <UserList
          users={users}
          onEditUser={setSelectedUser}
          onDeleteUser={handleDeleteUser}
        />
      </div>
    </div>
  );
};

export default App;
