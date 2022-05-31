import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import blimp from "../images/blimpW.png";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={blimp} alt="logo" style={{ height: 50 }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </NavItem>
          {props.auth0.isAuthenticated ? (
            <NavItem>
              <Link to="/saved-events" className="nav-link">
                Saved Events
              </Link>
            </NavItem>
          ) : null}
          {props.auth0.isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default withAuth0(Header);
