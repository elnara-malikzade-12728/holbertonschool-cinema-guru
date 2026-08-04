import { useEffect, useState } from 'react';
import axios from 'axios';

import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      return;
    }

    axios
      .post(
        '/api/auth/',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((response) => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setUserUsername('');
      });
  }, []);

  return isLoggedIn ? (
    <Dashboard userUsername={userUsername} />
  ) : (
    <Authentication />
  );
}

export default App;
