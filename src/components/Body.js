import React, { StrictMode } from "react";
import SearchBar from "./SearchBar";
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
                <h6>
                  An AI tool that generates insightful summaries for any given
                  YouTube video. It uses cutting-edge technologies to elevate
                  and facilitate your watching experience.
                </h6>
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
          <TextOutputFeild />
          {/* /----------------------------------------------------------------------------/ */}
        </div>
      </div>
    </StrictMode>
  );
};

export default Body;
