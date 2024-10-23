import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
