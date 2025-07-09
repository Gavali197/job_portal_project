import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../main'; // Adjust path as needed
import styles from './AdminDashboard.module.css'; // You can create a separate JobList.module.css if needed

const JobList = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authToken } = useContext(AuthContext); // Assuming authToken is in AuthContext

  useEffect(() => {
    const fetchUsersByRole = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/user/admin/users?role=${role}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            withCredentials: true,
          }
        );
        setUsers(response.data.users);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || `Failed to fetch ${role}s`);
        setLoading(false);
        toast.error(err.response?.data?.message || `Failed to fetch ${role}s`);
      }
    };

    fetchUsersByRole();
  }, [role, authToken]);

  if (loading) return <div className={styles.loading}>Loading {role}s...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div>
      <h2>{role} List</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.userTable}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className={styles.userRow}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={styles.emptyTable}>No {role}s found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;