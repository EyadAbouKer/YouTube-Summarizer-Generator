import React, { useState } from "react";
import "./SearchBar.css";
import SubmitButton from "./SubmitButton";

const SearchBar = ({ URL, setterURL }) => {
  return (
    <div className="pt-5 pb-4">
      <input
        className="form-control mr-sm-2 bar-background-grey text-white custom-placeholder"
        type="text"
        placeholder="Enter Youtube URL"
        aria-label="Search"
        onChange={setterURL}
        value={URL}
        style={{ border: "1px solid #6F6F6F" }}
      ></input>
    </div>
  );
};

export default SearchBar;
