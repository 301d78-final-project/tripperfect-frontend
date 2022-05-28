import { Component } from 'react';
import { Card } from 'react-bootstrap';
import LoginButton from './LoginButton';

class Login extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>Click Below to Log In</Card.Text>
            <LoginButton />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Login;
