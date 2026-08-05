import Input from '../general/Input';
import SearchBar from '../general/SearchBar';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

import './movies.css';

const availableGenres = [
  'action',
  'drama',
  'comedy',
  'biography',
  'romance',
  'thriller',
  'war',
  'history',
  'sport',
  'sci-fi',
  'documentary',
  'crime',
  'fantasy',
];

const sortOptions = [
  'latest',
  'oldest',
  'highestrated',
  'lowestrated',
];

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  return (
    <div className="movie-filter">
      <SearchBar title={title} setTitle={setTitle} />

      <div className="filter-years">
        <Input
          label="Min Date:"
          type="number"
          value={minYear}
          setValue={setMinYear}
        />
        <Input
          label="Max Date:"
          type="number"
          value={maxYear}
          setValue={setMaxYear}
        />
      </div>

      <SelectInput
        label="Sort by:"
        options={sortOptions}
        value={sort}
        setValue={setSort}
      />

      <ul className="filter-tags">
        {availableGenres.map((genre) => (
          <Tag
            key={genre}
            genre={genre}
            filter
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
