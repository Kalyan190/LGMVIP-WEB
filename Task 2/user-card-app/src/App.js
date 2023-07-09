import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Brand Name</div>
        <button className="get-users-button" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-card-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <div className="user-info">
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
