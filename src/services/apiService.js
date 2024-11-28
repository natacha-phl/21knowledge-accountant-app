import axios from 'axios';

const API_URL = 'http://192.168.100.6:8000/api';

const api = axios.create({
    baseURL: API_URL,
});

// Intercept requests to add the Authorization header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Login user
export const loginUser = (credentials) => {
    return api.post('/login', credentials)
        .then(response => response.data) // Expected to return { token, user }
        .catch(error => {
            console.error('Error logging in:', error);
            throw error;
        });
};

// Get users
export const fetchUsers = () => {
    return api.get('/users')
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching users:', error);
            throw error;
        });
};

// Fetch all expense types
export const fetchTypes = (range = 'home-office') => {
    return api.get(`/expense-types?range=${range}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching types:', error);
            throw error;
        });
};

// Create a new expense type
export const createType = (typeData) => {
    return api.post('/expense-types', typeData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error creating type:', error);
            throw error;
        });
};

// Delete an expense type by ID
export const deleteType = (typeId) => {
    return api.delete(`/expense-types/${typeId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error deleting type:', error);
            throw error;
        });
};

// Fetch labels for a specific expense type
export const fetchLabels = (expenseTypeId) => {
    // This assumes you have a custom route like /expense-types/{id}/labels
    return api.get(`/expense-types/${expenseTypeId}/labels`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching labels:', error);
            throw error;
        });
};

// Create a new label for an expense type
export const createLabel = (labelData) => {
    return api.post('/expense-labels', labelData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error creating label:', error);
            throw error;
        });
};

// Delete a label by ID
export const deleteLabel = (labelId) => {
    return api.delete(`/expense-labels/${labelId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error deleting label:', error);
            throw error;
        });
};

// Creating a new user (POST request)
export const createUser = (userData) => {
    return api.post('/users', userData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error creating user:', error);
            throw error;
        });
};

// Example of deleting a user (DELETE request)
export const deleteUser = (userId) => {
    return api.delete(`/users/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error deleting user:', error);
            throw error;
        });
};

export default {
    fetchTypes,
    createType,
    deleteType,
    fetchLabels,
    createLabel,
    deleteLabel,
    fetchUsers,
    createUser,
    deleteUser,
};
