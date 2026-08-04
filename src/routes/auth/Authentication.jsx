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

  const showLogin = () => {
    setSwitch(true);
  };

  const showRegister = () => {
    setSwitch(false);
  };

  return (
    <form
      className="authentication"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="authentication-tabs">
        <Button
          label="Sign In"
          className={
            _switch
              ? 'auth-tab auth-tab-active'
              : 'auth-tab'
          }
          onClick={showLogin}
        />

        <Button
          label="Sign Up"
          className={
            !_switch
              ? 'auth-tab auth-tab-active'
              : 'auth-tab'
          }
          onClick={showRegister}
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