import { useState } from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    onSearch(keyword);
  };

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__field-wrapper">
          <input
            type="text"
            name="search"
            className="search-form__input"
            placeholder="Enter topic"
            required
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
