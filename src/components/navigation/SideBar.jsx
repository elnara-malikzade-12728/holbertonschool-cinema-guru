import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faFolder,
  faRightLong,
  faStar,
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
    const page = pageName.toLowerCase().replace(/\s/g, '');
    setSelected(page);
    navigate(routes[page]);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .get('http://localhost:8000/api/activity', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const activityData = Array.isArray(response.data)
          ? response.data
          : response.data?.activities;

        setActivities(
          Array.isArray(activityData) ? activityData : [],
        );
      })
      .catch(() => setActivities([]));
  }, []);

  const openSideBar = () => {
    setSmall(false);
    setShowActivities(true);
  };

  const closeSideBar = () => {
    setSmall(true);
    setShowActivities(false);
  };

  const items = [
    { name: 'Home', page: 'home', icon: faFolder },
    { name: 'Favorites', page: 'favorites', icon: faStar },
    { name: 'Watch Later', page: 'watchlater', icon: faClock },
  ];

  return (
    <nav
      className={`side-bar ${small ? 'small' : ''}`}
      onMouseEnter={openSideBar}
      onMouseLeave={closeSideBar}
    >
      <ul className="side-bar-navigation">
        {items.map((item) => (
          <li
            key={item.page}
            className={selected === item.page ? 'selected' : ''}
            onClick={() => setPage(item.name)}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.name}</span>
            {selected === item.page && (
              <FontAwesomeIcon className="page-arrow" icon={faRightLong} />
            )}
          </li>
        ))}
      </ul>

      {showActivities && (
        <div className="activities-panel">
          <h2>Latest Activities</h2>
          <ul className="activity-list">
            {(Array.isArray(activities) ? activities : [])
              .slice(0, 10)
              .map((activity, index) => (
              <Activity
                key={activity.id || activity._id || index}
                activity={activity}
              />
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
