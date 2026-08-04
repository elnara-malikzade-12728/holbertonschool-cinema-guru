import { useState } from 'react';

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

  return (
    <form
      className="authentication"
      onSubmit={(event) => event.preventDefault()}
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