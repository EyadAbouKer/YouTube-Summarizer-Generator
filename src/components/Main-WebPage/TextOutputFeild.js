import Form from "react-bootstrap/Form";
import "./TextOutputFeild.css";

function TextOutputFeild() {
  return (
    <div className="pt-4 ">
      <Form.Control
        type="textarea"
        placeholder="output text"
        // readOnly
        // rows={9}
        className="text-output-feild custom-placeholder"
      />
    </div>
  );
}

export default TextOutputFeild;
