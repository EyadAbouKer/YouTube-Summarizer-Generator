import React from "react";

const SubmitButton = ({ onSubmit }) => {
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
