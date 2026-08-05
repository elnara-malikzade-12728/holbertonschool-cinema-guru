import './components.css';

function Activity({ activity }) {
  const username = activity?.username || activity?.userUsername || activity?.user?.username || '';
  const movieTitle = activity?.movieTitle || activity?.title || activity?.movie?.title || '';
  const activityType = activity?.activityType || '';
  const actions = {
    favorite: ['added', 'to favorites'],
    watchLater: ['added', 'to watch later'],
    removeFavorited: ['removed', 'from favorites'],
    removeWatchLater: ['removed', 'from watch later'],
  };
  const [verb, destination] = actions[activityType]
    || ['added', 'to watch later'];
  const rawDate = activity?.createdAt || activity?.date || activity?.timestamp;
  const date = rawDate
    ? new Date(rawDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <li className="activity-item">
      <p>
        <span>{username}</span> {verb} <span>{movieTitle}</span>{' '}
        {destination}
        {date && <em> - {date}</em>}
      </p>
    </li>
  );
}

export default Activity;
