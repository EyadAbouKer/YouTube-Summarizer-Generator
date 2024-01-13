import React from "react";

const SubmitButton = ({ onSubmit }) => {
  return (
    <div>
      <button
        type="button"
        className="btn text-white"
        style={{ backgroundColor: "#DA5B00", fontWeight: "600" }}
        onClick={onSubmit}
      >
        Summarize
      </button>
    </div>
  );
};

export default SubmitButton;
