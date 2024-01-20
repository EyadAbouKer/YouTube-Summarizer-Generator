import React, { StrictMode, useState, useEffect } from "react";
import "./Body.css";
import "./SubmitButton.js";
import SearchBar from "./SearchBar.js";
import SubmitButton from "./SubmitButton.js";
import DropDownMenu from "./DropDownMenu.js";
import TextOutputFeild from "./TextOutputFeild.js";
import axios from "axios";

const API_KEY = "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";

const Body = () => {
  // a hook to dynamically disable Submit button when users should not click it.
  const [isDisabled, setIsDisabled] = useState(true);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);

  let transcript = "";

  // a hook to SubmitButton and SearchBar together
  const [getURL, setURL] = React.useState("");

  //works with SearchBar to get the input from and update the setURL. it also disables Submit button if search bar is empty.
  const handleInputChange = (e) => {
    setURL(e.target.value);
    if (e.target.value !== "") setIsDisabled(false);
    else setIsDisabled(true);
  };

  {
    /* /----------------------------------------------------------------------------/ */
  }

  /* /----------------------------------------------------------------------------/ */
  async function sendStringToServer(stringValue) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/getURL",
        { URL: stringValue },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      console.log(typeof response.data);
      transcript = response.data;
      // Any code here will execute after the response is received
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /* /----------------------------------------------------------------------------/ */
  /* /----------------------------------------------------------------------------/ */

  // dropDown lists values definition.
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

  // to keep track of the selected dropdown values.
  const [selectedDepthOption, setSelectedDepthOption] = useState("brief");
  const [selectedToneOption, setSelectedToneOption] = useState("normal");
  const [selectedStyleOption, setSelectedStyleOption] = useState("paragraph");

  // summary hook to rerender the summary when the output from chatGPT is generated.
  const [summary, setSummary] = useState("");

  // to update the summary when we don't need to rerender it.
  let summaryVariable = "";
  // to keep track of the important keywords returned by the request from ChatGPT.
  let importantKeywords = [""];

  //this function is going to be used to push the URL to openAI or to another function that concatenates everything
  async function handleSubmit() {
    if (isDisabled) {
      alert("YouTube field is empty, please enter a YouTube Link");
    } else {
      console.log(getURL);
      setIsDisabled(true);
      setIsWaitingResponse(true);

      {
        /* /----------------------------------------------------------------------------/ */
      }
      //calling the function which sends the getURL value to flask for processing

      await sendStringToServer(getURL);
      {
        /* /----------------------------------------------------------------------------/ */
      }

      const chatGptApiBody_Summarize = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Summarize the provided content in a " +
              { selectedStyleOption } +
              " format; make it " +
              { selectedDepthOption } +
              ", and" +
              { selectedToneOption },
          },
          {
            role: "user",
            content: transcript,
          },
        ],
        temperature: 0.7,
        max_tokens: 250,
        top_p: 1,
      };
      console.log(transcript);
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(chatGptApiBody_Summarize),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          summaryVariable = data.choices[0].message.content;
        });

      const chatGPTApiBody_Keywords = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "return a max of 6 most important keywords in the following and separate them by commas",
          },
          {
            role: "user",
            content: summaryVariable,
          },
        ],
        temperature: 0.7,
        max_tokens: 50,
        top_p: 1,
      };

      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(chatGPTApiBody_Keywords),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          importantKeywords = data.choices[0].message.content.split(",");
        });

      for (let i = 0; i < importantKeywords.length; i++) {
        summaryVariable = summaryVariable
          .split(importantKeywords[i])
          .join(
            '<span style="color: #DA5B00; font-weight: bold;">' +
              importantKeywords[i] +
              "</span>"
          );
      }
      setSummary(summaryVariable);

      setIsDisabled(false);
      setIsWaitingResponse(false);
    }
  }

  {
    /* /----------------------------------------------------------------------------/ */
  }

  function updateSelectedDepthItem(evt) {
    setSelectedDepthOption(evt.target.value);
  }
  function updateSelectedToneItem(evt) {
    setSelectedToneOption(evt.target.value);
  }
  function updateSelectedStyleItem(evt) {
    setSelectedStyleOption(evt.target.value);
  }

  return (
    <StrictMode>
      <>
        {/* /----------------------------------------------------------------------------/ */}
        <div className="p-lg-5 p-md-0 text-white ">
          <p
            className="text-center px-5 pt-5 mt-2 mb-2"
            style={{ lineHeight: 1.5 }}
          >
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
              <DropDownMenu
                items={depthItems}
                selected={selectedDepthOption}
                setSelected={updateSelectedDepthItem}
              />
            </div>
            <div className="mb-3 d-flex flex-row flex-sm-column justify-content-between">
              <p className="label">Summary Tone</p>
              <DropDownMenu
                items={toneItems}
                selected={selectedToneOption}
                setSelected={updateSelectedToneItem}
              />
            </div>
            <div className="mb-3 d-flex flex-row flex-sm-column justify-content-between">
              <p className="label">Summary Style</p>
              <DropDownMenu
                items={styleItems}
                selected={selectedStyleOption}
                setSelected={updateSelectedStyleItem}
              />
            </div>
            <div className="mb-3 d-flex flex-column justify-content-end submit-button">
              <SubmitButton
                onSubmit={handleSubmit}
                isDisabled={isDisabled}
                isWaitingResponse={isWaitingResponse}
              />
            </div>
          </div>
          {/* /----------------------------------------------------------------------------/ */}

          <div className="px-5">
            <TextOutputFeild summary={summary} />
          </div>
          {/* /----------------------------------------------------------------------------/ */}
        </div>
      </>
    </StrictMode>
  );
};

export default Body;
