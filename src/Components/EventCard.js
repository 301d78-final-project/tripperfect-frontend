import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Row, Button } from "react-bootstrap";
import EventModal from "./EventModal";
import axios from "axios";

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      selectedEvent: null,
    };
  }

  showModal = (title) => {
    const selectedEvent = this.props.eventData.find(
      (singleEvent) => singleEvent.name === title
    );
    this.setState({ displayModal: true, selectedEvent: selectedEvent });
  };

  hideModal = () => this.setState({ displayModal: false });

  addEvents = async (savedEvent) => {
    try {
      let addedEvent = this.props.eventData.find(
        (attraction) => attraction.name === savedEvent
      );

      const config = {
        data: {
          title: addedEvent.name,
          description: addedEvent.url,
          location: addedEvent._embedded.venues[0].city.name,
          email: this.props.auth0.user.email,
        },
        method: "post",
        baseURL: `http://localhost:3001/favorites`,
      };
      const response = await axios(config);
      console.log(response.data, "<== response.data");
    } catch (e) {
      console.log(e, "error in addEvents");
    }
  };

  render() {
    return (
      <>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {this.props.eventData.map((attraction) => (
            <Card key={attraction.id} id="eventcard" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={attraction.images[0].url} />
              <Card.Body>
                <Card.Title>{attraction.name}</Card.Title>
                <Card.Text>
                  <a
                    href={attraction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ticket Link
                  </a>
                </Card.Text>
                <Card.Text>
                  <strong>Min Price:</strong> ${attraction.priceRanges[0].min} |{" "}
                  <strong>Max Price:</strong> ${attraction.priceRanges[0].max}
                </Card.Text>
                <Card.Text>
                  <strong>Start Date:</strong>{" "}
                  {attraction.dates.start.localDate} |{" "}
                  <strong>Local Start Time:</strong>{" "}
                  {attraction.dates.start.localTime}
                </Card.Text>
                <Button onClick={() => this.showModal(attraction.name)}>
                  More Info
                </Button>
                <EventModal
                  selectedEvent={this.state.selectedEvent}
                  displayModal={this.state.displayModal}
                  onHide={this.hideModal}
                />

                {this.props.auth0.isAuthenticated ? (
                  <Button
                    id="eventbutton"
                    variant="primary"
                    onClick={() => this.addEvents(attraction.name)}
                  >
                    Save Event!
                  </Button>
                ) : (
                  <Button id="eventbutton" variant="primary">
                    Log In To Save Event
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "30rem" }} id="welcome-card">
            <Card.Img
              variant="top"
              src="./images/TripPerfect2.png"
              alt="welcome to TripPerfect"
            />
            <Card.Body>
              <Card.Title>WELCOME!</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </>
    );
  }
}

export default withAuth0(EventCard);
