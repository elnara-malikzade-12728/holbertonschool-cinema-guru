import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

import Button from '../../components/general/Button';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';

import './dashboard.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = useCallback((pageNumber) => {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .get('http://localhost:8000/api/titles/advancedsearch', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageNumber,
        },
      })
      .then((response) => {
        const loadedMovies = response.data?.titles || [];

        setPage(pageNumber);
        setMovies((currentMovies) => (
          pageNumber === 1
            ? loadedMovies
            : [...currentMovies, ...loadedMovies]
        ));
      });
  }, [genres, maxYear, minYear, sort, title]);

  useEffect(() => {
    loadMovies(1);
  }, [loadMovies]);

  const loadMore = () => {
    const nextPage = page + 1;
    loadMovies(nextPage);
  };

  return (
    <div className="home-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      <ul className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>

      <Button
        label="Load More.."
        className="load-more"
        onClick={loadMore}
      />
    </div>
  );
}

export default HomePage;
