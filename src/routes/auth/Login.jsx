import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

import './auth.css';

function Login({
  username,
  password,
  setUsername,
  setPassword,
}) {
  return (
    <div className="auth-content">
      <h1>Sign in with your account</h1>

      <Input
        label="Username:"
        type="text"
        className="auth-input"
        value={username}
        setValue={setUsername}
        icon={faUser}
        inputAttributes={{
          name: 'username',
          autoComplete: 'username',
        }}
      />

      <Input
        label="Password:"
        type="password"
        className="auth-input"
        value={password}
        setValue={setPassword}
        icon={faLock}
        inputAttributes={{
          name: 'password',
          autoComplete: 'current-password',
        }}
      />

      <Button
        label="Sign In"
        className="auth-submit-button"
        onClick={() => {}}
      />
    </div>
  );
}

export default Login;