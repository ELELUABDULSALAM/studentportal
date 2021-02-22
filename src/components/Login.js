import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router";
// import Loader from "./Loading";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { BrowserRouter, Route, Link } from "react-router-dom";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  // const [loadings, setLoadings] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const { username, password } = state;
    // setLoadings(true);
    if (username === "" || password === "") {
      // setLoadings(false);
      return alert("Username or Password empty");
    }
    console.log(`You are submitting ${username} and ${password}`);
    // debugger;
    //posting registration data
    await axios
      .post("https://halal-school.herokuapp.com/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);

        if (
          response.data.message === "success" &&
          response.data.responseCode === "00"
        ) {
          localStorage.setItem("token", response.data.token);

          localStorage.setItem(
            "profile",
            JSON.stringify(response.data.profile)
          );
          setTimeout(() => {
            if (response.data.profile.memberType === "Student") {
              history.push({
                pathname: "/result-dashboard",
              });
            } else if (response.data.profile.memberType === "Teacher") {
              history.push({
                pathname: "/upload-result",

              });
            } else if (response.data.profile.memberType === "Admin") {
              history.push({
                pathname: "/admin",
                
              });
            }
          }, 3000);
        } else if (response.data.responseCode === "01") {
          // alert(response.data.message);
          setError("Invalid username or ID nyumber");
          // setLoadings(false);
          setSubmitting(false);
          history.push("/sign-in");
        }
      })

      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  return (
    <div style={{ marginTop: "2%", marginBottom: "4%" }}>
      <div className="auth-wrapper">
        <div className="auth-inner">
          {/* <h3> Login Component</h3> */}
          <form>
            <h3>Sign In</h3>
            {/* <BounceLoader loading={loadings} css={override} size={150} /> */}

            <div className="form-group">
              <label>User Name</label>
              <input
                type="username"
                className="form-control"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
                value={state.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>ID Number</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>

            <p style={{ fontSize: "10px", color: "red" }}>{error} </p>

            <button
              type="submit"
              onClick={handleSubmitClick}
              className="btn btn-primary btn-block"
              disabled={submitting}
            >
              {submitting ? "Loading" : "Log in"}
              {/* Log In */}
            </button>
            <p className="forgot-password text-right">
              Forgot <Link to="./forget-password">password?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
