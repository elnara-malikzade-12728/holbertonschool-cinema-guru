import './components.css';

function Activity({ activity }) {
  const username = activity?.username || activity?.userUsername || 'A user';
  const movie = activity?.movieTitle || activity?.title || activity?.movie?.title || 'a movie';
  const action = activity?.activity || activity?.action || activity?.type || 'interacted with';

  const descriptions = {
    favorite: 'added to favorites',
    favorites: 'added to favorites',
    liked: 'added to favorites',
    watchlater: 'added to watch later',
    'watch later': 'added to watch later',
    watched: 'watched',
    removed: 'removed',
  };

  return (
    <li className="activity-item">
      <p>
        <strong>{username}</strong>{' '}
        {descriptions[String(action).toLowerCase()] || action}{' '}
        <strong>{movie}</strong>
      </p>
    </li>
  );
}

export default Activity;
