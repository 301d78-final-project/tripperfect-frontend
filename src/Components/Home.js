import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../css/EventCards.css';
import { withAuth0 } from '@auth0/auth0-react';
import EventModal from './EventModal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      searchQuery: '',
      displayModal: false,
      selectedEvent: []
    };
  }

  addEvents = async titleOfTheEventThatIAmLookingFor => {
    // try {
    let theEventThatICareAbout = this.props.eventData.find(
      att => att.name === titleOfTheEventThatIAmLookingFor
    );
    console.log(
      theEventThatICareAbout._embedded.attractions,
      'FROM INSIDE ADD EVENTS'
    );
    const config = {
      data: {
        title: theEventThatICareAbout.name,
        //change description to url(here&server)
        description: theEventThatICareAbout.url,
        location: theEventThatICareAbout._embedded.venues[0].city.name,
        // formatted_address: theEventThatICareAbout,
        // date: theEventThatICareAbout._embedded.events.sales.public.startDateTime,
        email: 'email@example.com',
      },
      method: 'post',
      baseURL: 'http://localhost:3001/favorites',
    };
    // }

    const response = await axios(config);
    console.log(response.data, 'THIS IS RESPONSE DOT DATA');
  };

  showModal = (title) => {
    const selectedEvent = this.props.eventData.find(singleEvent => singleEvent.name === title);
    this.setState({
      displayModal: true,
      selectedEvent: selectedEvent,
    })
  }

  hideModal = () => {
    this.setState({
      displayModal: false
    })
  }

  render() {
    return (
      <Container className='text-center'>
        <Form onSubmit={event => this.props.getEvents(event)}>
          <Row className='justify-content-md-center'>
            <Col sm={3} className='my-1'>
              <Form.Label htmlFor='inlineFormInputName' visuallyHidden>
                Please Enter City Name
              </Form.Label>
              <Form.Control
                onChange={event =>
                  this.props.setSearchQuery(event.target.value)
                }
                placeholder='Ex: Seattle'
              />
            </Col>
            <Col xs='auto' className='my-1'>
              <Button
                type='submit'
                as='input'
                value='Submit'
                variant='primary'
              />{' '}
            </Col>
          </Row>
        </Form>

        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Col fluid> */}
          {this.props.eventData.map(attractions => (
            <Card id='eventcard' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={attractions.images[0].url} />
              <Card.Body>
                <Card.Title>{attractions.name}</Card.Title>
                <Card.Text>
                  <a
                    href={attractions.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ticket Link
                  </a>
                </Card.Text>
                <Card.Text>
                  <p> <strong>Min Price:</strong> ${attractions.priceRanges[0].min} | <strong>Max Price:</strong> ${attractions.priceRanges[0].max}</p>
                </Card.Text>
                <Card.Text>
                  <p><strong>Start Date:</strong> {attractions.dates.start.localDate} | <strong>Local Start Time:</strong> {attractions.dates.start.localTime}</p>
                </Card.Text>
                <Button onClick={() => this.showModal(attractions.name)}>More Info</Button>
                <EventModal selectedEvent={this.state.selectedEvent} displayModal={this.state.displayModal} onHide={this.hideModal} />

                {this.props.auth0.isAuthenticated ? (
                  <Button
                    id='eventbutton'
                    variant='primary'
                    onClick={() => this.addEvents(attractions.name)}
                  >
                    Save Event!
                  </Button>
                ) : (
                  <Button id='eventbutton' variant='primary'>
                    Log In To Save Event
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
          {/* </Col> */}
        </Row>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Col> */}
          <Card style={{ width: '30rem' }}>
            <Card.Img
              variant='top'
              src='https://developer.ticketmaster.com/assets/img/products-and-docs/map.jpg'
            />
            <Card.Body>
              <Card.Title>Map</Card.Title>
              <Card.Text>Basic city address here:</Card.Text>
            </Card.Body>
          </Card>
          {/* </Col> */}
        </Row>
      </Container>
    );
  }
}
export default withAuth0(Home);
