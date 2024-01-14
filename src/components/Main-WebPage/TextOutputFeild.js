import Form from "react-bootstrap/Form";
import "./TextOutputFeild.css";

function TextOutputFeild(props) {
  return (
    <textarea
      placeholder="output text"
      value={props.value}
      readOnly={true}
      rows="30"
      className="mt-4 form-control mr-sm-2 text-white custom-placeholder"
      style={{color: 'white', backgroundColor: '#454545', border: 'none', resize: 'none'}}
    >
    </textarea>
  );
}

export default TextOutputFeild;
