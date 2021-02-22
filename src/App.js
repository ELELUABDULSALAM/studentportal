import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Pages/Home";
import Login from "./components/Pages/LoginPage";
import SignUp from "./components/Pages/SignUpPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Result from "./components/Result";
import RecordResult from "./components/RecordResult";
import Profile from "./components/Pages/Profile";
import Register from "./components/Register";
import Forget from "./components/Forget";
import StudentList from "./components/StudentList";
import Logout from "./components/Logout";
import { useHistory } from "react-router";

function App() {
  const [state, setState] = useState();

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setState(false);
    } else {
      setState(true);
    }

    // console.log(!getToken);
    // debugger;
    // const getToken = localStorage.getItem("token");
    // if (getToken) {
    //   history.push("/sign-in");
    // }
  });

  return (
    <Router>
      <div className="App">
        <Navbar state={state} />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/sign-in" component={Login} />
          <Route path="/admin" component={Register} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/edit-student/:id/:memberClass" component={SignUp} />
          <Route path="/result-dashboard" component={Result} />
          <Route path="/upload-result" component={RecordResult} />
          <Route path="/profile" component={Profile} />
          <Route path="/forget-password" component={Forget} />
          <Route path="/student-list" component={StudentList} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
