import { useState } from 'react';
import axios from 'axios';

import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

import './auth.css';

function Authentication({
  setIsLoggedIn,
  setUserUsername,
}) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const route = _switch
      ? '/api/auth/login'
      : '/api/auth/register';

    axios
      .post(route, { username, password })
      .then((response) => {
        localStorage.setItem(
          'accessToken',
          response.data.accessToken,
        );
        setUserUsername(username);
        setIsLoggedIn(true);
      });
  };

  return (
    <form
      className="authentication"
      onSubmit={handleSubmit}
    >
      <div className="authentication-tabs">
        <Button
          label="Sign In"
          className={`authentication-tab ${
            _switch ? 'active' : ''
          }`}
          onClick={() => setSwitch(true)}
        />

        <Button
          label="Sign Up"
          className={`authentication-tab ${
            !_switch ? 'active' : ''
          }`}
          onClick={() => setSwitch(false)}
        />
      </div>

      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </form>
  );
}

export default Authentication;