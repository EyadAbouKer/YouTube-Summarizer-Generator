import "./TextOutputFeild.css";
import parse from "html-react-parser"; // this will help in converting the html content inside 'summary' variable into a React component.
import copyIcon from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\assets\\ClipBoard-icon.svg";
import speaker from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\assets\\speaker.svg";
import audioFile from "C:\\Users\\abouk\\Desktop\\Hackathon2024- TheCodFatherCrew\\CONDENSACORE\\ai-summarizer-v.0.0\\src\\Audio\\Alarm01.wav";
function TextOutputFeild({ summary, text }) {
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

    // playSound function that takes a pointer to mp3 and play it in the browser
    // const playSound = () => {

    //         };
  };
  return (
    <>
      <div className="outputFeildHeader mt-4 rounded d-flex justify-content-end ">
        {/* /------------------------------------clipboard button----------------------------------------/ */}
        <button
          onClick={copyToClipboard}
          type="button"
          className="btn btn-outline-warning p-1  "
        >
          <img src={copyIcon} alt="" className="pd-1" />
        </button>
        {/* /----------------------------------------------------------------------------/ */}

        {/* /--------------------------------speaker--------------------------------------------/ */}
        <audio id="audio" src={audioFile} />
        <button type="button" class="btn btn-outline-warning p-1">
          <img
            src={speaker}
            alt=""
            className="speaker"
            onClick={() => document.getElementById("audio").play()}
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
          height: "1000px",
        }}
      >
        <p>{summary === "" ? "Output text" : parse(summary)}</p>
      </div>
    </>
  );
}

export default TextOutputFeild;
