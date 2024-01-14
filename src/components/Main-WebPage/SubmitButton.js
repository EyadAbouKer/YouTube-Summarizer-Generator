import React from "react";
import './SubmitButton.css'

const SubmitButton = ({ onSubmit, isDisabled }) => {
  return (
    <div>
      <button
        type="button"
        className="btn text-white stylized"
        onClick={onSubmit}
        disabled={isDisabled}
      >
        {(isDisabled) ?
          <svg className="svgStyles" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle fill={'white'} className="spinner_qM83" cx="4" cy="12" r="3"/>
            <circle fill={'white'} className="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
            <circle fill={'white'} className="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
          </svg>
          :
          'Summarize'}
      </button>
    </div>
  );
};

export default SubmitButton;
