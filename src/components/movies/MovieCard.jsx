import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import Tag from './Tag';

import './movies.css';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const getHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/titles/favorite/', {
        headers: getHeaders(),
      }),
      axios.get('/api/titles/watchlater/', {
        headers: getHeaders(),
      }),
    ])
      .then(([favoritesResponse, watchLaterResponse]) => {
        setIsFavorite(
          favoritesResponse.data.some(
            (title) => title.imdbId === movie.imdbId,
          ),
        );
        setIsWatchLater(
          watchLaterResponse.data.some(
            (title) => title.imdbId === movie.imdbId,
          ),
        );
      })
      .catch(() => {
        setIsFavorite(false);
        setIsWatchLater(false);
      });
  }, [movie.imdbId]);

  const handleClick = (type) => {
    const selected = type === 'favorite'
      ? isFavorite
      : isWatchLater;
    const route = `/api/titles/${type}/${movie.imdbId}`;
    const request = selected
      ? axios.delete(route, { headers: getHeaders() })
      : axios.post(route, {}, { headers: getHeaders() });

    request.then(() => {
      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else {
        setIsWatchLater(!isWatchLater);
      }
    });
  };

  const image = movie.imageurls?.[0] || movie.imageUrl || '';

  return (
    <li className="movie-card">
      <div
        className="movie-poster"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="movie-actions">
          <FontAwesomeIcon
            className={isFavorite ? 'active' : ''}
            icon={faStar}
            onClick={() => handleClick('favorite')}
          />
          <FontAwesomeIcon
            className={isWatchLater ? 'active' : ''}
            icon={faClock}
            onClick={() => handleClick('watchlater')}
          />
        </div>
      </div>

      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>

        <ul className="movie-genres">
          {(movie.genres || []).map((genre) => (
            <Tag
              key={typeof genre === 'string' ? genre : genre.name}
              genre={typeof genre === 'string' ? genre : genre.name}
              filter={false}
              genres={[]}
              setGenres={() => {}}
            />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default MovieCard;
