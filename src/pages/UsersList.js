import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, deleteUser } from '../services/apiService';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // Fetch users from the API when the component mounts
    useEffect(() => {
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error loading users:', error));
    }, []);

    const addUser = () => {
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') return;

        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email,
        };

        createUser(newUser)
            .then((createdUser) => {
                setUsers([...users, createdUser]);
                setFirstName('');
                setLastName('');
                setEmail('');
            })
            .catch((error) => console.error('Error adding user:', error));
    };

    const removeUser = (id) => {
        const user = users.find(user => user.id === id);
        const confirmDelete = window.confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`);

        if (confirmDelete) {
            deleteUser(id)
                .then(() => {
                    setUsers(users.filter(user => user.id !== id));
                })
                .catch((error) => console.error('Error deleting user:', error));
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Users</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addUser}>
                    Add User
                </button>
            </div>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{user.first_name} {user.last_name}</strong> - {user.email}
                            <br />
                            {user.businesses && user.businesses.length > 0 ? (
                                <span className="text-muted">
                                    Business: {user.businesses.map(business => business.business_name).join(', ')}
                                </span>
                            ) : (
                                <span className="text-muted">No associated business</span>
                            )}
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => removeUser(user.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
