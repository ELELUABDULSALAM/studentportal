import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router";
// import Loader from "./Loading";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    setSubmitting(true);
    const {
      firstName,
      surname,
      email,
      memberType,
      phoneNumber,
      address,
      memberClass,
      gender,
    } = data;
    await axios
      .post("https://halal-school.herokuapp.com/addMember", {
        firstName,
        surname,
        email,
        memberType,
        phoneNumber,
        address,
        memberClass,
        gender,
      })
      .then((response) => {
        // console.log(response.data.message);
        setSubmitting(false);
        setUser(response.data.message);
      })
      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-edit">
      <div className="input">
        <input
          type="firstName"
          placeholder="First Name"
          name="firstName"
          ref={register({ required: "First Name require" })}
        />
        {errors.firstName && (
          <p style={{ fontSize: "10px", color: "red" }}>
            {errors.firstName.message}{" "}
          </p>
        )}
      </div>
      <div className="input">
        <input
          type="surname"
          placeholder="surname"
          name="surname"
          ref={register({ required: true })}
        />
      </div>
      <div className="input">
        <input
          type="email"
          placeholder="abd***@gmail.com"
          name="email"
          ref={register({ required: true })}
        />
      </div>
      <div className="input">
        <input
          type="phoneNumber"
          placeholder="+23481355*****"
          name="phoneNumber"
          ref={register({ required: true })}
        />
      </div>
      <div className="input">
        <input
          type="address"
          placeholder="address"
          name="address"
          ref={register({ required: true })}
        />
      </div>
      <div className="input">
        <select name="memberType" ref={register}>
          <option value="">Select Category</option>
          <option value={"Teacher"}>Teacher</option>
          <option value={"Student"}>Student</option>
        </select>
      </div>
      <div className="input">
        <select name="memberClass" ref={register}>
          <option value="">Select Class</option>
          <option value={"SS3"}>SS3</option>
          <option value={"SS2"}>SS2</option>
          <option value={"SS1"}>SS1</option>
          <option value={"JSS3"}>JSS3</option>
          <option value={"JSS2"}>JSS2</option>
          <option value={"JSS1"}>JSS1</option>
        </select>
      </div>
      <div className="input">
        <select name="selectNumber" ref={register}>
          <option value="">Select Gender</option>
          <option value={"Female"}>Female</option>
          <option value={"Male"}>Male</option>
        </select>
      </div>

      <p style={{ fontSize: "10px", color: "red" }}>{user} </p>

      <button>
        {submitting ? "Loading" : "Submit"}
        {/* Submit */}
      </button>
    </form>
  );
}

export default Login;
