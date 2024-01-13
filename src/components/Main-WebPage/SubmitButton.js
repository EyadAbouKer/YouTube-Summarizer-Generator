import React from "react";


const SubmitButton = (getVideoTranscript) => {
  // must create a function that takes input from searchBox onSubmit
  return (
    <div>
      <button
        type="button"
        className="btn text-white"
        style={{ backgroundColor: "#DA5B00", fontWeight: '600'}}
        onClick={() => getVideoTranscript()}
      >
        Summarize
      </button>
    </div>
  );
};

export default SubmitButton;
