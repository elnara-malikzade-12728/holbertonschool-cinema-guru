import './general.css';

function SearchBar({
  title,
  setTitle,
}) {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search Movies"
      value={title}
      onChange={handleInput}
    />
  );
}

export default SearchBar;
