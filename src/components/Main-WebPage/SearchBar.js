import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="p-3">
      <input
        class="form-control mr-sm-2 bar-background-grey text-white mt-5 custom-placeholder p-2"
        type="search"
        placeholder="Enter Youtube URL"
        aria-label="Search"
      ></input>
    </div>
  );
};

export default SearchBar;
