import Form from "react-bootstrap/Form";

function TextOutputFeild() {
  return (
    <div className="pt-4 ">
      <Form.Control type="text" placeholder="output text" readOnly />
    </div>
  );
}

export default TextOutputFeild;
