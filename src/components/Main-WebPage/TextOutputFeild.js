import "./TextOutputFeild.css";
import parse from "html-react-parser"; // this will help in converting the html content inside 'summary' variable into a React component.
import copyIcon from "C:\\Users\\zizoo\\Desktop\\ABOOD\\CODING_MAIN\\ReactProjects\\VScode_projects\\ai-summarizer\\src\\assets\\ClipBoard-icon.svg";
import speaker from "C:\\Users\\zizoo\\Desktop\\ABOOD\\CODING_MAIN\\ReactProjects\\VScode_projects\\ai-summarizer\\src\\assets\\speaker.svg";
import {useEffect, useState} from "react";

function TextOutputFeild({ summary, text }) {

  const [textForAudio, setTextForAudio] = useState("");
  const [isSpeaking, setIspeaking] = useState(false);
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg) => {
    msg.text = textForAudio
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      window.speechSynthesis.speak(msg)
    }
    setIspeaking(!isSpeaking);
  }

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
      <div className="outputFeildHeader mt-4 d-flex justify-content-end " style={{borderRadius: '10px 10px 0 0'}}>
        {/* /------------------------------------clipboard button----------------------------------------/ */}
        <button
          onClick={copyToClipboard}
          type="button"
          className="btn"
          title='copy'
        >
          <img src={copyIcon} alt="" />
        </button>
        {/* /----------------------------------------------------------------------------/ */}

        {/* /--------------------------------speaker--------------------------------------------/ */}
        <button type="button" className="btn">
          <img
            src={speaker}
            alt=""
            className="speaker"
            title='listen'
            onClick={() => speechHandler(msg)}
          />
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
          borderRadius: '0 0 10px 10px'
        }}
      >
        <p>{summary === "" ? "Output text" : parse(summary)}</p>
      </div>
    </>
  );
}

export default TextOutputFeild;
