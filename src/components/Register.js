import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import { useHistory, useParams } from "react-router";
// import Loader from "./Loading";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({}) {
  //get the param of url
  var { id, memberClass } = useParams();
  memberClass.substring(1);
  console.log(id);
  console.log(memberClass.substring(1));
  const isAddMode = !id;

  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState("");
  const [personstore, setPersonstore] = useState({});

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    errors,
    formState,
  } = useForm();

  const onSubmit = async (data) => {
    return isAddMode ? createUser(data) : updateUser(id, data);
  };

  const createUser = async (data) => {
    // console.log(data);
    // debugger;
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

  const updateUser = async (id, data) => {
    // console.log("Update user");
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
      .post("https://halal-school.herokuapp.com/updateMember", {
        firstName,
        surname,
        email,
        memberType,
        phoneNumber,
        address,
        memberClass,
        gender,
        id,
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

  const insideEffect = async () => {
    if (!isAddMode) {
      await axios
        .post("https://halal-school.herokuapp.com/fetchMembers", {
          memberClass: memberClass.substring(1),
        })
        .then((response) => {
          var editStore = JSON.stringify(response.data.info);
          localStorage.removeItem("editPerson");
          localStorage.setItem("editPerson", editStore);
        })
        .catch((error) => {
          console.log("We are getting this error:");
          console.log(error.response);
        });
      id = id.substring(1);
      const fields = [
        "firstName",
        "surname",
        "email",
        "memberType",
        "phoneNumber",
        "address",
        "memberClass",
        "gender",
      ];
      // debugger;
      var persons = JSON.parse(localStorage.getItem("editPerson"));
      // console.log(persons);
      persons.forEach(function (arrayItem) {
        console.log(arrayItem._id);
        console.log(id);
        if (arrayItem._id === id) {
          fields.forEach((field) => setValue(field, arrayItem[field]));
        }
      });
    }
  };

  useEffect(() => {
    insideEffect();
  }, []);

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
            {errors.firstName.message}
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
        <select name="gender" ref={register}>
          <option value="gender">Select Gender</option>
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
