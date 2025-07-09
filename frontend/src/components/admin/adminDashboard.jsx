// // import { useState, useEffect, useContext } from 'react';
// // import axios from 'axios';
// // import { AuthContext } from '../../main'; // Adjust path as needed
// // import toast from 'react-hot-toast';

// // const AdminDashboard = () => {
// //     const [users, setUsers] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const { user } = useContext(AuthContext);
// //     const authToken = localStorage.getItem('authToken'); // Assuming token is stored here

// //     useEffect(() => {
// //         const fetchUsers = async () => {
// //             setLoading(true);
// //             setError(null);
// //             try {
// //                 const response = await axios.get(
// //                     'http://localhost:4000/api/v1/user/admin/users',
// //                     {
// //                         headers: {
// //                             Authorization: `Bearer ${authToken}`,
// //                         },
// //                         withCredentials: true, // If your backend uses cookies for session
// //                     }
// //                 );
// //                 setUsers(response.data.users);
// //                 setLoading(false);
// //             } catch (err) {
// //                 setError(err.response?.data?.message || 'Failed to fetch users');
// //                 setLoading(false);
// //                 toast.error(err.response?.data?.message || 'Failed to fetch users');
// //             }
// //         };

// //         if (user && (user.role === 'Owner' || user.role === 'Admin')) {
// //             fetchUsers();
// //         } else if (user) {
// //             setError('You do not have permission to access this page.');
// //             setLoading(false);
// //             toast.error('You do not have permission to access this page.');
// //         } else {
// //             setError('User not authenticated.');
// //             setLoading(false);
// //             toast.error('User not authenticated.');
// //         }
// //     }, [user, authToken]);

// //     if (loading) {
// //         return <div>Loading users...</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }

// //     return (
// //         <div className="admin-dashboard">
// //             <h2>Admin Dashboard - User Management</h2>
// //             <div className="user-list">
// //                 {users.length > 0 ? (
// //                     <table>
// //                         <thead>
// //                             <tr>
// //                                 <th>ID</th>
// //                                 <th>Name</th>
// //                                 <th>Email</th>
// //                                 <th>Role</th>
// //                                 {/* Add more columns as needed */}
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {users.map(user => (
// //                                 <tr key={user._id}>
// //                                     <td>{user._id}</td>
// //                                     <td>{user.name}</td>
// //                                     <td>{user.email}</td>
// //                                     <td>{user.role}</td>
// //                                     {/* Add more data cells */}
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 ) : (
// //                     <p>No users found.</p>
// //                 )}
// //             </div>
// //             {/* You can add more admin functionalities here */}
// //         </div>
// //     );
// // };

// // export default AdminDashboard;




import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../main'; // Adjust path as needed
import styles from './AdminDashboard.module.css';
import JobList from './JobList';
import UserList from './UserList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobSeekers');
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Admin Panel</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button
              onClick={() => setActiveTab('jobSeekers')}
              className={activeTab === 'jobSeekers' ? styles.active : ''}
            >
              Job Seekers
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => setActiveTab('employers')}
              className={activeTab === 'employers' ? styles.active : ''}
            >
              Employers
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => setActiveTab('manageJobSeekers')}
              className={activeTab === 'manageJobSeekers' ? styles.active : ''}
            >
              Manage Job Seekers
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => setActiveTab('manageEmployers')}
              className={activeTab === 'manageEmployers' ? styles.active : ''}
            >
              Manage Employers
            </button>
          </li>
        </ul>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </aside>
      <main className={styles.mainContent}>
        {activeTab === 'jobSeekers' && <JobList role="Job Seeker" />}
        {activeTab === 'employers' && <JobList role="Employer" />}
        {activeTab === 'manageJobSeekers' && <UserList role="Job Seeker" />}
        {activeTab === 'manageEmployers' && <UserList role="Employer" />}
      </main>
    </div>
  );
};

export default AdminDashboard;

