import { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends Component {
  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>LOGO HERE</Navbar.Brand>
          <Nav className='me-auto'>
            <NavItem>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/about-us' className='nav-link'>
                About Us
              </Link>
            </NavItem>
            {this.props.auth0.isAuthenticated ? (
              <NavItem>
                <Link to='/saved-events' className='nav-link'>
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
