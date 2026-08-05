import { useState } from 'react';

import Filter from '../../components/movies/Filter';

function HomePage() {
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [sort, setSort] = useState('latest');
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');

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
    </div>
  );
}

export default HomePage;
