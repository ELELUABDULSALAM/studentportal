import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";

function Logout() {
  const history = useHistory();
  localStorage.clear();
  return <div>{history.push("/sign-in")}</div>;
}

export default Logout;
