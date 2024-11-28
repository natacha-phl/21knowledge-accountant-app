import React, { useState } from 'react';
import { FaUser, FaTags, FaList, FaSignOutAlt, FaBars, FaUserCircle } from 'react-icons/fa';
import UsersList from './UsersList';
import TypesList from './TypesList';
import LabelsList from './LabelsList';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

    return (
        <div style={styles.container}>
            {/* Sidebar */}
            <div style={styles.sidebar}>
                <div style={styles.logoContainer}>
                    
                    <h2 style={styles.logoText}>Dashboard</h2>
                </div>
                <button onClick={() => setActiveTab('users')} style={activeTab === 'users' ? styles.activeButton : styles.button}>
                    <FaUser style={styles.icon} /> Users
                </button>
                <button onClick={() => setActiveTab('types')} style={activeTab === 'types' ? styles.activeButton : styles.button}>
                    <FaList style={styles.icon} /> Types
                </button>
                <button onClick={() => setActiveTab('labels')} style={activeTab === 'labels' ? styles.activeButton : styles.button}>
                    <FaTags style={styles.icon} /> Labels
                </button>
            </div>

            {/* Main Content */}
            <div style={styles.content}>
                {/* Header */}
                <div style={styles.header}>
                    <h1 style={styles.title}>Dashboard</h1>
                    <div style={styles.profileMenu}>
                        <FaUserCircle size={40} onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)} style={styles.profileIcon} />
                        {isProfileDropdownOpen && (
                            <div style={styles.dropdownMenu}>
                                <button style={styles.dropdownItem} onClick={() => alert('Logging out...')}>
                                    <FaSignOutAlt style={styles.dropdownIcon} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div style={styles.tabContent}>
                    {activeTab === 'users' && <UsersList />}
                    {activeTab === 'types' && <TypesList />}
                    {activeTab === 'labels' && <LabelsList />}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f4f6f8',
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#007bff',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '40px',
        height: '40px',
    },
    logoText: {
        fontSize: '20px',
        marginLeft: '10px',
    },
    button: {
        padding: '15px 20px',
        margin: '10px 0',
        width: '100%',
        backgroundColor: 'transparent',
        color: '#fff',
        border: 'none',
        textAlign: 'left',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#0056b3',
        padding: '15px 20px',
        margin: '10px 0',
        width: '100%',
        color: '#fff',
        border: 'none',
        textAlign: 'left',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#fff',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
    },
    title: {
        fontSize: '24px',
        color: '#333',
    },
    profileMenu: {
        position: 'relative',
    },
    profileIcon: {
        cursor: 'pointer',
        color: '#333',
    },
    dropdownMenu: {
        position: 'absolute',
        top: '50px',
        right: '0',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        zIndex: 1,
    },
    dropdownItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        width: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    dropdownIcon: {
        marginRight: '10px',
    },
    tabContent: {
        padding: '20px',
        backgroundColor: '#fff',
        height: '100%',
        overflowY: 'auto',
    },
};

export default Dashboard;
