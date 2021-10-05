import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      eventData: [],
      searchQuery: '',
    };
  }

  getEvents = async (event) => {
    event.preventDefault();
    try {
      const eventAPI = `http://localhost:3001/events?city=${this.state.searchQuery}&startDateTime`;
      const eventResponse = await axios.get(eventAPI);
      console.log(eventResponse.data._embedded.events, 'THIS IS eventResponse.data')
      this.setState({
        eventData: eventResponse.data._embedded.events,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    return (
      <Container className='text-center'>
      <Form onSubmit={this.getEvents}>
            <Row className="justify-content-md-center">
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                  Please Enter City Name
                </Form.Label>
                <Form.Control onChange={(event) => this.setState({ searchQuery: event.target.value })} placeholder="Ex: Seattle" />
              </Col>
              <Col xs="auto" className="my-1">
                <Button type="submit" as="input" value="Submit" variant="primary" />{' '}
              </Col>
            </Row>
          </Form>

      {/*<Form>
      <input
      onChange={(event) =>
      this.setState({searchQuery: event.target.value})}></input>
      <Button variant="dark" type="submit" onSubmit={this.getEvents}>SEARCH</Button>
      </Form>*/}
        <Row>
         <Col>
          {this.state.eventData.map((attractions) => ( 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={attractions.images[0].url} />
              <Card.Body>
                <Card.Title>{attractions.name}</Card.Title>
                <Card.Text><a href={attractions.url} target="_blank" rel="noopener noreferrer">ticket link</a></Card.Text>
                <Button variant='primary'>Save button-not working yet</Button>
              </Card.Body>
              </Card>
              ))}
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
