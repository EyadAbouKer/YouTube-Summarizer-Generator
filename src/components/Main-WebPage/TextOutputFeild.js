import "./TextOutputFeild.css";
import parse from "html-react-parser"; // this will help in converting the html content inside 'summary' variable into a React component.
import copyIcon from "../../assets/ClipBoard-icon.svg"
import speaker from "../../assets/speaker.svg"
import {useEffect, useState} from "react";

function TextOutputFeild({ summary, text }) {

  const [textForAudio, setTextForAudio] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  let msg = new SpeechSynthesisUtterance();
  msg.text = textForAudio;

  const speechHandler = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      window.speechSynthesis.speak(msg);
    }

    // Toggle the speaking state
    setIsSpeaking(!isSpeaking);
  };

  useEffect(() => {
    setTextForAudio(text);
    window.speechSynthesis.cancel();
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

  // Add a beforeunload event listener to cancel speech when the page is refreshed or closed
  useEffect(() => {
    const cancelSpeechOnUnload = () => {
      window.speechSynthesis.cancel();
    };

    window.addEventListener('beforeunload', cancelSpeechOnUnload);

    return () => {
      window.removeEventListener('beforeunload', cancelSpeechOnUnload);
    };
  }, []);

  return (
    <>
      <div className="outputFeildHeader ps-2 pe-2 mt-4 d-flex justify-content-end align-items-center" style={{borderRadius: '10px 10px 0 0'}}>


        {/* /--------------------------------speaker--------------------------------------------/ */}
        <button type="button" className="btn pe-3 ps-3" onClick={(msg) => speechHandler(msg)} title='listen'>
          <img
            src={speaker}
            alt="listen"
          />
        </button>
        {/* /----------------------------------------------------------------------------/ */}


        {/* /------------------------------------clipboard button----------------------------------------/ */}
        <button
          onClick={copyToClipboard}
          type="button"
          className="btn pe-3 ps-3"
          title='copy'
        >
          <img src={copyIcon} alt="copy" />
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
