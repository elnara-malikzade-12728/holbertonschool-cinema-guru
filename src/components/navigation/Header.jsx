import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './navigation.css';

function Header({
  userUsername,
  setIsLoggedIn,
}) {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <div className="header-user">
        <img
          src="https://picsum.photos/100/100"
          alt="User avatar"
        />

        <p>Welcome, {userUsername}</p>
      </div>

      <span
        className="header-logout"
        onClick={logout}
      >
        <FontAwesomeIcon icon={faPowerOff} />
        Logout
      </span>
    </nav>
  );
}

export default Header;