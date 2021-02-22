import React, { useState } from "react";
import { NavLink as RouterNavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState(true);
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

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  ABDUL <i className="fab fa-adn "></i>
                </NavLink>
              </NavItem>
            </Nav>

            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <>
                  {/* <ul className={click ? "nav-menu active" : "nav-menu"}> */}
                  <NavItem>
                    {/* <li className="nav-item"> */}
                    <Link
                      to="/sign-in"
                      className="nav-links-mobile"
                      // onClick={closeMobileMenu}
                    >
                      <Button
                        id="qsLoginBtn"
                        color="primary"
                        className="btn-margin"
                        // onClick={() => loginWithRedirect()}
                      >
                        Log in
                      </Button>
                    </Link>
                  </NavItem>
                  {/* <NavItem>
                      <Link to="/sign-up" className="nav-links-mobile">
                        <Button
                          id="qsLoginBtn"
                          color="primary"
                          className="btn-margin"
                        >
                          Sign-Up
                        </Button>
                      </Link>
                    </NavItem> */}
                  {/* </ul> */}
                </>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      // src={user.picture}
                      src="https://westendss.eq.edu.au/HomePagePictures/slide-01.jpg"
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{"kenhinde"}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      {/* <FontAwesomeIcon icon="user" className="mr-3" />  */}
                      Profile
                    </DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/result-dashboard"
                      className="dropdown-result-dashboard"
                      activeClassName="router-link-exact-active"
                    >
                      {/* <FontAwesomeIcon icon="user" className="mr-3" />  */}
                      Result
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      // onClick={() => logoutWithRedirect()}
                    >
                      {/* <FontAwesomeIcon icon="power-off" className="mr-3" />  */}
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <>
                <Nav className="d-md-none" navbar>
                  <NavItem>
                    <Link
                      to="/sign-in"
                      className="nav-links-mobile"
                      // onClick={closeMobileMenu}
                    >
                      <Button
                        id="qsLoginBtn"
                        color="primary"
                        block
                        // onClick={() => loginWithRedirect({})}
                      >
                        Log-in
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
                {/* <Nav className="d-md-none" navbar>
                  <NavItem>
                    <Link
                      to="/sign-up"
                      className="nav-links-mobile"
                      // onClick={closeMobileMenu}
                    >
                      <Button
                        id="qsLoginBtn"
                        color="primary"
                        block
                        // onClick={() => loginWithRedirect({})}
                      >
                        Sign-Up
                      </Button>
                    </Link>
                  </NavItem>
                </Nav> */}
              </>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src="https://westendss.eq.edu.au/HomePagePictures/slide-01.jpg"
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{"kehinde"}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  {/* <FontAwesomeIcon icon="user" className="mr-3" /> */}
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  {/* <FontAwesomeIcon icon="power-off" className="mr-3" /> */}
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={logoutWithRedirect}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
