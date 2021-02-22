import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

export default function Navbar(props) {
  // const getToken = localStorage.getItem("token");
  // console.log(getToken);

  console.log(props);
  // const { state } = props;
  // console.log(state);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState();
  // const [isAuthenticated, setisAuthenticated] = useState();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const history = useHistory();

  const logoutWithRedirect = () => {
    history.push({
      pathname: "/",
    });
  };

  const handleClick = () => setClick(!click);
  // const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const closeMobileMenu = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const checkStatus = () => {
    const getToken = localStorage.getItem("token");
  };

  useEffect(() => {
    showButton();
    const getToken = localStorage.getItem("token");
    setisAuthenticated(!getToken);
    // console.log("update " + getToken);
    // console.log("navbar should change ");
    // checkStatus();
    // // console.log(!getToken);
    // const loginStatus = !getToken;
    // console.log(!loginStatus);
    // setisAuthenticated(!loginStatus);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/sign-in"
            className="navbar-logo"
            // onClick={closeMobileMenu}
          >
            ABDUL <i className="fab fa-adn"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* {!getToken === false ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/logout"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    Log Out now
                  </Link>
                </li>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  to="/sign-in"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              </li>
            )} */}
            {/* {console.log(isAuthenticated)} */}
          </ul>
          {/* {isAuthenticated === false
            ? button && (
                <Link to="/logout" className="btn-mobile">
                  <button className={`btn btn--primary btn--outline`}>
                    LOG OUT
                  </button>
                </Link>
              )
            : button && <Button buttonStyle="btn--outline"> LOG IN</Button>} */}

          {!props.state && (
            <Link to="/logout" className="btn-mobile">
              <button className={`btn btn--primary btn--outline`}>
                LOG OUT
              </button>
            </Link>
          )}
          {props.state && null}
        </div>
      </nav>
    </>
  );
}
