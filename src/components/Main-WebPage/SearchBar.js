import React from "react";
import "./SearchBar.css";

const SearchBar = (getVideoTranscript) => {


  //let [text, setText] = setText('');
  function updateInputValue(evt) {
    const val = evt.target.value;
    //setText(val);
    getVideoTranscript(val);
  }


  return (
    <div className="pt-5 pb-4">
      <input
        className="form-control mr-sm-2 bar-background-grey text-white custom-placeholder"
        type="text"
        placeholder="Enter Youtube URL"
        aria-label="Search"
        style={{border: '1px solid #6F6F6F'}}
        //value={text}
        //onChange={evt => updateInputValue(evt)}
      ></input>
    </div>
  );
};

export default SearchBar;
