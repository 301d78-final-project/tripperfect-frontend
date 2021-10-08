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
      selectedEvent: null
    };
  }

  addEvents = async titleOfTheEventThatIAmLookingFor => {
    // try {
    let theEventThatICareAbout = this.props.eventData.find(
      att => att.name === titleOfTheEventThatIAmLookingFor
    );

    const config = {
      data: {
        title: theEventThatICareAbout.name,
        description: theEventThatICareAbout.url,
        location: theEventThatICareAbout._embedded.venues[0].city.name,
        email: this.props.auth0.user.email,
      },
      method: 'post',
      baseURL: `${process.env.REACT_APP_SERVER}/favorites`,
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
          {this.props.eventData.map(attraction => (
            <Card key={attraction.id} id='eventcard' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={attraction.images[0].url} />
              <Card.Body>
                <Card.Title>{attraction.name}</Card.Title>
                <Card.Text>
                  <a
                    href={attraction.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ticket Link
                  </a>
                </Card.Text>
                <Card.Text>
                   <strong>Min Price:</strong> ${attraction.priceRanges[0].min} | <strong>Max Price:</strong> ${attraction.priceRanges[0].max}
                </Card.Text>
                <Card.Text>
                  <strong>Start Date:</strong> {attraction.dates.start.localDate} | <strong>Local Start Time:</strong> {attraction.dates.start.localTime}
                </Card.Text>
                <Button onClick={() => this.showModal(attraction.name)}>More Info</Button>
                <EventModal selectedEvent={this.state.selectedEvent} displayModal={this.state.displayModal} onHide={this.hideModal} />

                {this.props.auth0.isAuthenticated ? (
                  <Button
                    id='eventbutton'
                    variant='primary'
                    onClick={() => this.addEvents(attraction.name)}
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
              src='./images/TripPerfect2.png'
              alt="welcome to TripPerfect"
            />
            <Card.Body>
              <Card.Title>WELCOME!</Card.Title>
            </Card.Body>
          </Card>
          {/* </Col> */}
        </Row>
      </Container>
    );
  }
}
export default withAuth0(Home);
