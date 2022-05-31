import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      id="navbarFooter"
    >
      <Navbar.Brand>Trip Perfect</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
