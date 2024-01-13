import React, { useState } from "react";
import "./SearchBar.css";
import SubmitButton from "./SubmitButton";

const SearchBar = ({ URL, setterURL }) => {
  return (
    <div className="p-3">
      <input
        class="form-control mr-sm-2 bar-background-grey text-white mt-5 custom-placeholder p-2"
        type="search"
        placeholder="Enter Youtube URL"
        aria-label="Search"
        onChange={setterURL}
        value={URL}
      ></input>
    </div>
  );
};

export default SearchBar;
