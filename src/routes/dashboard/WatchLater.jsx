import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../../components/movies/MovieCard';

import './dashboard.css';

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .get('http://localhost:8000/api/titles/watchlater/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setMovies(response.data));
  }, []);

  return (
    <div className="movies-page">
      <h1>Movies to watch later</h1>

      <ul className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default WatchLater;
