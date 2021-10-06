import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbarFooter">
        <Navbar.Brand>Trip Perfect</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;