import axios from "axios";
import React, { useState } from "react";

import "./StudentList.css";

import {
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  NavItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function StudentList() {
  const [states, setStates] = useState([]);
  const [students, setStudents] = useState([]);

  const handleChange = async (e) => {
    const memberClass = e.target.value;
    console.log(memberClass);

    await axios
      .post("https://halal-school.herokuapp.com/fetchMembers", {
        memberClass,
      })
      .then((response) => {
        // console.log(response.data.info);
        const list = response.data.info;
        // localStorage.setItem("list", JSON.stringify(response.data.info));
        setStudents(response.data.info);
        // setState(Response.data);
        // setUser(response.data.message);
        // const item = JSON.parse(localStorage.getItem("profile"));
      })
      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  const studentDetail = (e) => {
    // console.log(e.target.value);
    // console.log(students);
    students.forEach(function (arrayItem) {
      if (arrayItem.firstName === e.target.value) {
        setStates(arrayItem);
      }
      // console.log(arrayItem.firstName);
    });
  };

  return (
    <div className="form">
      <Form.Group>
        <Form.Control
          as={Col}
          md="4"
          as="select"
          name="memberClass"
          size="lg"
          onChange={handleChange}
        >
          <option value="">Select Class</option>
          <option value={"SS3"}>SS3</option>
          <option value={"SS2"}>SS2</option>
          <option value={"SS1"}>SS1</option>
          <option value={"JSS3"}>JSS3</option>
          <option value={"JSS2"}>JSS2</option>
          <option value={"JSS1"}>JSS1</option>
        </Form.Control>
        <br />
        {students.length === 0 ? null : (
          <>
            <Form.Control
              as="select"
              name="student"
              size="lg"
              onChange={studentDetail}
            >
              <option value="student">Student Name</option>
              {students.map((student) => (
                <option key={student._id} value={student.firstName}>
                  {student.firstName}
                </option>
              ))}
            </Form.Control>
          </>
        )}
        {console.log(students)}
        <br />
      </Form.Group>
      {states.length === 0 ? null : (
        <>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img
              variant="top"
              src="https://pbs.twimg.com/profile_images/1324420867082903552/NRIqLbSE.jpg"
            />
            <Card.Body>
              <Card.Title> Name: {states.firstName}</Card.Title>
              <Card.Title> Surname: {states.surname}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> Reg No: {states.regId}</ListGroupItem>
              <ListGroupItem> Role: {states.memberType}</ListGroupItem>
              <ListGroupItem> Address: {states.address}</ListGroupItem>
            </ListGroup>
            <Link
              to={`/edit-student/:${states._id}/:${states.memberClass}`}
              className="button"
            >
              <button
                type="submit"
                // onClick={handleSubmitClick}
                className="btn btn-primary"
                // disabled={submitting}
              >
                {/* {submitting ? "Loading" : "Log in"} */}
                {"Edit"}
              </button>
            </Link>
          </Card>
        </>
      )}
    </div>
  );
}

export default StudentList;
