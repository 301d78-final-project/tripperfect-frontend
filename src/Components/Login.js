import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            email: event.target.formBasicEmail.value,
            username: event.target.formBasicUserName.value,
        };
        this.props.onLogin(userInfo)
    }

  render () {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Please Log In</Card.Title>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" onLogin={this.props.onLogin}>
                Log In
              </Button>
            </Form>                    

        </Card.Body>
      </Card>
    )
  }
}

export default Login;