import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../main'; // Adjust path as needed
import styles from './AdminDashboard.module.css'; // You might want a separate UserList.module.css for more specific styles
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserList = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authToken, user: loggedInUser } = useContext(AuthContext);
  const [editingUser, setEditingUser] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});

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
        setError(err.response?.data?.message || `Failed to fetch ${role}s for management`);
        setLoading(false);
        toast.error(err.response?.data?.message || `Failed to fetch ${role}s for management`);
      }
    };

    fetchUsersByRole();
  }, [role, authToken]);

  const handleEdit = (userData) => {
    setEditingUser(userData._id);
    setEditedUserData({ name: userData.name, email: userData.email, role: userData.role });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleSave = async (userId) => {
    try {
      await axios.put(
        `http://localhost:4000/api/v1/user/admin/user/${userId}`,
        editedUserData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      toast.success(`${role} updated successfully!`);
      setEditingUser(null);
      // Refresh user list
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
    } catch (error) {
      toast.error(error.response?.data?.message || `Failed to update ${role}`);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm(`Are you sure you want to delete this ${role}?`)) {
      try {
        await axios.delete(
          `http://localhost:4000/api/v1/user/admin/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            withCredentials: true,
          }
        );
        toast.success(`${role} deleted successfully!`);
        // Refresh user list
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
      } catch (error) {
        toast.error(error.response?.data?.message || `Failed to delete ${role}`);
      }
    }
  };

  const canEditRole = () => {
    // Implement your logic here to determine if the logged-in admin can edit roles
    // For example, only Owners might be able to edit roles of other Admins/Owners
    return loggedInUser?.role === 'Owner';
  };

  if (loading) return <div className={styles.loading}>Loading {role}s...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div>
      <h2>Manage {role}s</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.userTable}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className={styles.userRow}>
                  <td>{user._id}</td>
                  <td>
                    {editingUser === user._id ? (
                      <input
                        type="text"
                        name="name"
                        value={editedUserData.name}
                        onChange={handleInputChange}
                        className={styles.editInput}
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {editingUser === user._id ? (
                      <input
                        type="email"
                        name="email"
                        value={editedUserData.email}
                        onChange={handleInputChange}
                        className={styles.editInput}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {editingUser === user._id ? (
                      <select
                        name="role"
                        value={editedUserData.role}
                        onChange={handleInputChange}
                        className={styles.editSelect}
                        disabled={!canEditRole()} // Disable role editing based on permissions
                      >
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Employer">Employer</option>
                        {canEditRole() && (
                          <>
                            <option value="Admin">Admin</option>
                            <option value="Owner">Owner</option>
                          </>
                        )}
                      </select>
                    ) : (
                      <span className={styles.role}>{user.role}</span>
                    )}
                  </td>
                  <td className={styles.actions}>
                    {editingUser === user._id ? (
                      <>
                        <button
                          onClick={() => handleSave(user._id)}
                          className={styles.saveButton}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingUser(null)}
                          className={styles.cancelButton}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(user)}
                          className={styles.editButton}
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className={styles.deleteButton}
                        >
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={styles.emptyTable}>No {role}s found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;