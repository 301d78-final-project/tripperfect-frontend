import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }

  render() {
    return (
      <Container className='text-center'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='https://via.placeholder.com/150' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='https://via.placeholder.com/150' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '30rem' }}>
              <Card.Img variant='top' src='https://via.placeholder.com/350' />
              <Card.Body>
                <Card.Title>Map</Card.Title>
                <Card.Text>Basic city address here:</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
