import React, { useState } from "react";

// const

const SearchBar = ({ count }) => {
  const [clear, setClear] = useState(false);

  return (
    <article id="search-bar-box">
      <div id="shopping-icon">
        <div id="shopping-icon-number-circle">
          {<p id="shopping-icon-number">{count}</p>}
        </div>
      </div>

      <form className="search-bar-box">
        <input
          id="search"
          type="search"
          className="search-bar"
          placeholder="Search Furniture here .."
        />
        <button type="button" className="search-icon"></button>
      </form>
    </article>
  );
};

export default SearchBar;
