import "./TextOutputFeild.css";
import parse from "html-react-parser"; // this will help in converting the html content inside 'summary' variable into a React component.
import copyIcon from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\assets\\ClipBoard-icon.svg";
import speaker from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\assets\\speaker.svg";
import audioFile from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\Audio\\Alarm01.wav";
import { useEffect, useState } from "react";

function TextOutputFeild({ summary, text }) {
  const [textForAudio, setTextForAudio] = useState("");
  const [isSpeaking, setIspeaking] = useState(false);
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = textForAudio;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      window.speechSynthesis.speak(msg);
    }
    setIspeaking(!isSpeaking);
  };

  useEffect(() => {
    setTextForAudio(text);
  }, [text]);

  // this function copy summary to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text successfully copied to clipboard");
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  };
  return (
    <>
      <div
        className="outputFeildHeader mt-4 d-flex justify-content-end align-items-center"
        style={{ borderRadius: "10px 10px 0 0" }}
      >
        {/* /------------------------------------clipboard button----------------------------------------/ */}
        <button
          onClick={copyToClipboard}
          type="button"
          className="btn pt-1 pb-1 pe-0 ps-3"
          title="copy"
        >
          <img src={copyIcon} alt="copy" />
        </button>
        {/* /----------------------------------------------------------------------------/ */}

        {/* /--------------------------------speaker--------------------------------------------/ */}
        <button
          type="button"
          className="btn pt-1 pb-1 pe-3 ps-3"
          onClick={() => speechHandler(msg)}
          title="listen"
        >
          <img src={speaker} alt="listen" />
        </button>
        {/* /----------------------------------------------------------------------------/ */}
      </div>
      <div
        className=" form-control mr-sm-2 text-white custom-placeholder p-3 "
        style={{
          color: "white",
          backgroundColor: "#454545",
          border: "none",
          resize: "none",
          height: "500px",
          overflowY: "scroll",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <p>{summary === "" ? "Output text" : parse(summary)}</p>
      </div>
    </>
  );
}

export default TextOutputFeild;
