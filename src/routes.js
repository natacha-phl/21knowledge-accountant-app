import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import SignUpPage from './pages/SignUpPage';
import UsersList from './pages/UsersList';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import Dashboard2 from './pages/Dashboard copy';
import Settings from './pages/Settings';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage/>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/userslist" element={<PrivateRoute><UsersList/></PrivateRoute>} />
            <Route path="/adduser" element={<PrivateRoute><AddUser/></PrivateRoute>} />
            <Route path="/user/:id" element={<PrivateRoute><UpdateUser/></PrivateRoute>} />
            <Route path="settings" element={<PrivateRoute><Settings/></PrivateRoute>} />


            {/* Route test à supp  */}
            <Route path="/dashboard2" element={<PrivateRoute><Dashboard2 /></PrivateRoute>} />

        </Routes>
    );
};

export default AppRoutes;
