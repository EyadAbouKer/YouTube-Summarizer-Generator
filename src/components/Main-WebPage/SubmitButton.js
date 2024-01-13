import React from "react";

const SubmitButton = ({ onSubmit }) => {
  // this function takes the input from the searchBar and return its content(the youtube URL) as a string

  return (
    <div>
      <button
        type="button"
        class="btn"
        style={{ backgroundColor: "#DA5B00" }}
        onClick={onSubmit}
      >
        Summarize
      </button>
    </div>
  );
};

export default SubmitButton;
