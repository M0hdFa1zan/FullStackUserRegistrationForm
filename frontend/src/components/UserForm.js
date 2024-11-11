import React, { useState, useEffect } from 'react';
import "./UserForm.css"

const UserForm = ({ onAddUser, onUpdateUser, selectedUser, setSelectedUser }) => {
    const [formData, setFormData] = useState({ name: '', email: '', dateOfBirth: '' });

    useEffect(() => {
        if (selectedUser) {
            setFormData(selectedUser);
        }
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedUser) {
            onUpdateUser(selectedUser.id, formData);
            setSelectedUser(null);
        } else {
            onAddUser(formData);
        }
        setFormData({ name: '', email: '', dateOfBirth: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='inp-form'>
            <h1>User Management</h1>
            <div className='inputs'>
                <form onSubmit={handleSubmit}>
                    <div className='fields'>
                        <label htmlFor="fullname">Enter your name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            id='fullname'
                        />
                    </div>
                    <div className='fields'>
                        <label htmlFor="fullname">Enter your email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='fields'>
                        <label htmlFor="fullname">Your Date of birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of Birth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button id='add-user' type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
                    {selectedUser && <button id='cancel-user' onClick={() => setSelectedUser(null)}>Cancel</button>}
                </form>
            </div>
        </div>
    );
};

export default UserForm;
