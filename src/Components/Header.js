import { Component } from "react";
import { FormGroup, Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

class Header extends Component {


  render() {
    return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO HERE</Navbar.Brand>
          <Nav className="me-auto">
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            <NavItem><Link to="/saved-events" className="nav-link">Saved Events</Link></NavItem>
            <NavItem><Link to="/about-us" className="nav-link">About Us</Link></NavItem>
            <NavItem><Link to="/login" className="nav-link">Login</Link></NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
export default Header;
