import React, { StrictMode } from "react";
import SearchBar from "./SearchBar.js";
import "./Body.css";
import "./SubmitButton.js";
import SubmitButton from "./SubmitButton.js";
import DropDownMenu from "./DropDownMenu.js";
import TextOutputFeild from "./TextOutputFeild.js";

const Body = () => {
  return (
    <StrictMode>
      <div className="">
        {/* /----------------------------------------------------------------------------/ */}
        <div class="p-3 mb-0 text-white w-100 pt-5 body-background-grey">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6">
                {/* this should be enhanced more visually */}
                <h6 className="text-center">
                  A Revolutionary AI-Powered Platform That Transforms Your
                  YouTube Viewing Experience. <br /> Our advanced tool
                  intelligently generates comprehensive and insightful
                  summaries. <br /> Utilizing the latest in cutting-edge AI
                  technologies, ExploreAI not only enhances your understanding
                  but also significantly streamlines and enriches your watching
                  experience, making every video more accessible and
                  informative.
                </h6>
                <h1 className="text-center pt-4">Try it </h1>
              </div>
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}
          <div class="row justify-content-center">
            <div class="col-md-6">
              <SearchBar />
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}

          {/* /----------------------------------------------------------------------------/ */}
          <div className="p-2 ">
            <div class="row justify-content-center">
              <div class="col-md-2  m-1 d-flex justify-content-end">
                <DropDownMenu />
              </div>
              <div class="col-md-2   m-1 d-flex justify-content-end">
                <DropDownMenu />
              </div>
              <div class="col-md-2  m-1 d-flex justify-content-end">
                <DropDownMenu />
              </div>
              <div class="col-md-2   m-1 d-flex justify-content-end">
                <SubmitButton />
              </div>
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}

          <div class="row justify-content-center">
            <div class="col-md-6">
              <TextOutputFeild />
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}
        </div>
      </div>
    </StrictMode>
  );
};

export default Body;
