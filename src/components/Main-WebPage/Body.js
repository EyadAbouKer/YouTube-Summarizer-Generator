import React, { StrictMode, useState } from "react";
import "./Body.css";
import "./SubmitButton.js";
import SearchBar from "./SearchBar.js";
import SubmitButton from "./SubmitButton.js";
import DropDownMenu from "./DropDownMenu.js";
import TextOutputFeild from "./TextOutputFeild.js";

const API_KEY = "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";

const Body = () => {
  {
    /* /-------------------------connecting searchBar and SubmitButton---------------------------------------------------/ */
  }

  const [isDisabled, setIsDisabled] = useState(false);

  // a hook to SubmitButton and SearchBar together
  const [getURL, setURL] = React.useState("");

  //works with SearchBar to get the input from and update the setURL
  const handleInputChange = (e) => {
    setURL(e.target.value);
  };

  const [summary, setSummary] = useState("");
  //this function is going to be used to push the URL to openAI or to another function that concatinates everything
  async function handleSubmit() {
    console.log(getURL);
    setIsDisabled(true);

    const chatGptApiBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "make a short summary for the content you are provided with. make it brief, formal, and in a paragraph format"
        },
        {
          "role": "user",
          "content": getURL
        }
      ],
      "temperature": 0.7,
      "max_tokens": 164,
      "top_p": 1
    }


    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY,
      },
      body: JSON.stringify(chatGptApiBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setSummary(data.choices[0].message.content);
    });

    setIsDisabled(false);
  }

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
        <div className="p-lg-5 p-md-0 text-white ">
          <p className="text-center px-5 pt-5 mt-2 mb-2" style={{ lineHeight: 1.5 }}>
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

          <div className="d-flex flex-column flex-sm-row justify-content-between px-5 center">
            <div className="mb-3 d-flex flex-row flex-sm-column justify-content-between ">
              <p className="label">Summary Depth</p>
              <DropDownMenu items={depthItems} />
            </div>
            <div className="mb-3 d-flex flex-row flex-sm-column justify-content-between">
              <p className="label">Summary Tone</p>
              <DropDownMenu items={toneItems} />
            </div>
            <div className="mb-3 d-flex flex-row flex-sm-column justify-content-between">
              <p className="label">Summary Style</p>
              <DropDownMenu items={styleItems} />
            </div>
            <div className="mb-3 d-flex flex-column justify-content-end submit-button">
              <SubmitButton onSubmit={handleSubmit} isDisabled={isDisabled}/>
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}

          <div className="px-5">
            <TextOutputFeild value={summary}/>
          </div>
          {/* /----------------------------------------------------------------------------/ */}
        </div>
      </>
    </StrictMode>
  );
};

export default Body;
