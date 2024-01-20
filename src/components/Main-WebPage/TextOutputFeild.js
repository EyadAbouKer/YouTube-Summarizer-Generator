import "./TextOutputFeild.css";
import parse from "html-react-parser"; // this will help in converting the html content inside 'summary' variable into a React component.
// import copyIcon from "C:UsersaboukDesktopHackathon2024- TheCodFatherCrewCONDENSACOREai-summarizer-v.0.0srccomponentsmediacopy-icon.svg";

function TextOutputFeild({ summary }) {
  return (
    <>
      <div className="outputFeildHeader mt-4 rounded">
        <img src="" alt="" />
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
