import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button } from "react-bootstrap";

function RecordResult() {
  const [score, setScore] = useState([
    {
      matric: "",
      subject: "",
      mark: "",
    },
  ]);

  const handleChange = () => {
    console.log("inputing the score for the student");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("the score has been submitted for the student");
  };
  return (
    <div>
      <Form>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
          <Form.Label>Matric Number</Form.Label>
          <Form.Control as="select">
            <option value="13/30GB072">13/30GB072</option>
            <option value="13/30GB073">13/30GB073</option>
            <option value="13/30GB074">13/30GB074</option>
            <option value="13/30GB075">13/30GB075</option>
            <option value="13/30GB076">13/30GB076</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="select" value={score.subject}>
            <option value="13/30GB077">MAT 101</option>
            <option value="13/30GB07">MAT 102</option>
            <option value="13/30GB02">CHM 101</option>
            <option value="13/30GB72">CHE 201</option>
            <option value="13/30G072">CVE 333</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Score</Form.Label>
          <Form.Control
            type="score"
            onChange={handleChange}
            placeholder="Email"
            value={score.mark}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "15px", marginBottom: "10px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RecordResult;
