import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavItem, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import blimp from '../images/blimp.png';

class Header extends Component {
  render() {
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
            {this.props.auth0.isAuthenticated ? (
              <NavItem>
                <Link to="/saved-events" className="nav-link">
                  Saved Events
                </Link>
              </NavItem>
            ) : null}
            {this.props.auth0.isAuthenticated ? (
              <LogoutButton />
            ) : (
              <LoginButton />
            )}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default withAuth0(Header);
