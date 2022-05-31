import { Card } from 'react-bootstrap';
import LoginButton from './LoginButton';

const Login = () => {
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

export default Login;
