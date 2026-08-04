import { useEffect, useState } from 'react';
import axios from 'axios';

import Authentication from './routes/auth/Authentication';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken =
      localStorage.getItem('accessToken');

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

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>Dashboard for {userUsername}</div>
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  );
}

export default App;