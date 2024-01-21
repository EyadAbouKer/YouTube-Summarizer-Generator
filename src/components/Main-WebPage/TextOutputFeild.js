import "./TextOutputFeild.css";
import parse from "html-react-parser"; // this will help in converting the html content inside 'summary' variable into a React component.
import copyIcon from "C:\\Users\\zizoo\\Desktop\\ABOOD\\CODING_MAIN\\ReactProjects\\VScode_projects\\ai-summarizer\\src\\assets\\ClipBoard-icon.svg";
import speaker from "C:\\Users\\zizoo\\Desktop\\ABOOD\\CODING_MAIN\\ReactProjects\\VScode_projects\\ai-summarizer\\src\\assets\\speaker.svg";
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
  };
  return (
    <>
      <div className="outputFeildHeader mt-4 rounded d-flex justify-content-end ">
        <button
          onClick={copyToClipboard}
          type="button"
          className="btn btn-outline-warning p-1  "
        >
          <img src={copyIcon} alt="" className="pd-1" />
        </button>
        <button type="button" class="btn btn-outline-warning p-1">
          <img src={speaker} alt="" className="speaker" />
        </button>
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
