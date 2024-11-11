import React from 'react';
import "./UserList.css"

const UserList = ({ users, onEditUser, onDeleteUser }) => {
    return (
        <div className='registered'>
            <h1>Registered Users</h1>
            <ol>
                {users.map(user => {
                    const formattedDate = new Date(user.dateOfBirth).toLocaleDateString();
                    return (
                        <li key={user._id}>
                            {user.name} - {user.email} - {formattedDate}
                            <div className='render'>
                                <button onClick={() => onEditUser(user)}><i className="fa-solid fa-pen-to-square"></i></button>
                                <button onClick={() => onDeleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};

export default UserList;
