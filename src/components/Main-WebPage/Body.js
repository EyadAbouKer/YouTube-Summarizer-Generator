import React, { StrictMode, useState } from "react";
import "./Body.css";
import "./SubmitButton.js";
import SearchBar from "./SearchBar.js";
import SubmitButton from "./SubmitButton.js";
import DropDownMenu from "./DropDownMenu.js";
// import TextOutputField from "./TextOutputField.js";
import TextOutputFeild from "./TextOutputFeild.js";

const Body = () => {
  {
    /* /-------------------------connecting searchBar and SubmitButton---------------------------------------------------/ */
  }
  // a hook to SubmitButton and SearchBar together
  const [getURL, setURL] = React.useState("");

  //works with SearchBar to get the input from and update the setURL
  const handleInputChange = (e) => {
    setURL(e.target.value);
  };

  //this function is going to be used to push the URL to openAI or to another function that concatinates everything
  const handleSubmit = () => {
    // alert(`Submitting: ${getURL}`);
    console.log(getURL);
    // Handle the submission logic here (e.g., send data to an API)
  };

  {
    /* /----------------------------------------------------------------------------/ */
  }

  const depthItems = [
    { value: "brief", label: "brief" },
    { value: "normal", label: "normal" },
    { value: "detailed", label: "detailed" },
  ];
  const toneItems = [
    { value: "funny", label: "funny" },
    { value: "normal", label: "normal" },
    { value: "formal", label: "formal" },
  ];
  const styleItems = [
    { value: "paragraph", label: "paragraph" },
    { value: "bullet points", label: "bullet points" },
    { value: "abstract", label: "abstract" },
  ];

  return (
    <StrictMode>
      <>
        {/* /----------------------------------------------------------------------------/ */}
        <div className="p-lg-5 p-md-0 text-white pt-5">
          <p className="text-center px-5 mt-2 mb-2" style={{ lineHeight: 1.5 }}>
            A Revolutionary AI-Powered Platform That Transforms Your YouTube
            Viewing Experience. Our advanced tool intelligently generates
            comprehensive and insightful summaries. Utilizing the latest in
            cutting-edge AI technologies, ExploreAI not only enhances your
            understanding but also significantly streamlines and enriches your
            watching experience, making every video more accessible and
            informative.
          </p>
          {/* /----------------------------------------------------------------------------/ */}
          {/* /----------------------------------------------------------------------------/ */}
          <div className="px-5">
            <SearchBar URL={getURL} setterURL={handleInputChange} />
          </div>
          {/* /----------------------------------------------------------------------------/ */}

          <div className="d-flex justify-content-between px-5 center">
            <div className="mb-1 bt-1 d-flex justify-content-center">
              <DropDownMenu items={depthItems} />
            </div>
            <div className="mb-1 bt-1 d-flex justify-content-center">
              <DropDownMenu items={toneItems} />
            </div>
            <div className="mb-1 bt-1 d-flex justify-content-center">
              <DropDownMenu items={styleItems} />
            </div>
            <div className="mb-1 bt-1 d-flex justify-content-center">
              <SubmitButton onSubmit={handleSubmit} />
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}

          <div className="px-5">
            <TextOutputFeild />
          </div>
          {/* /----------------------------------------------------------------------------/ */}
        </div>
      </>
    </StrictMode>
  );
};

export default Body;
