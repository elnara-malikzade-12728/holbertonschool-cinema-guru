import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronDown,
  faClock,
  faHeart,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

import Activity from '../Activity';

import './navigation.css';

function SideBar() {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const routes = {
    home: '/home',
    favorites: '/favorites',
    watchlater: '/watchlater',
  };

  const setPage = (pageName) => {
    const normalizedPageName = pageName.toLowerCase().replace(/\s/g, '');
    setSelected(normalizedPageName);
    navigate(routes[normalizedPageName]);
  };

  useEffect(() => {
    axios
      .get('/api/activity')
      .then((response) => setActivities(response.data))
      .catch(() => setActivities([]));
  }, []);

  return (
    <nav className={`side-bar ${small ? 'small' : ''}`}>
      <button
        type="button"
        className="side-bar-toggle"
        onClick={() => setSmall(!small)}
        aria-label="Toggle sidebar"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className="side-bar-navigation">
        <li
          className={selected === 'home' ? 'selected' : ''}
          onClick={() => setPage('Home')}
        >
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </li>
        <li
          className={selected === 'favorites' ? 'selected' : ''}
          onClick={() => setPage('Favorites')}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>Favorites</span>
        </li>
        <li
          className={selected === 'watchlater' ? 'selected' : ''}
          onClick={() => setPage('Watch Later')}
        >
          <FontAwesomeIcon icon={faClock} />
          <span>Watch Later</span>
        </li>
      </ul>

      <button
        type="button"
        className="activities-toggle"
        onClick={() => setShowActivities(!showActivities)}
      >
        <span>Latest Activities</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {showActivities && (
        <ul className="activity-list">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity
              key={activity.id || activity._id || index}
              activity={activity}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}

export default SideBar;
