import React from "react";

const WaitingSpinner = () => {
  return (
    <div>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default WaitingSpinner;
