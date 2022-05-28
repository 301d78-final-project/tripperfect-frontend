import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Row, Button } from "react-bootstrap";
import EventModal from "./EventModal";
import WelcomeCard from "./WelcomeCard";
import axios from "axios";


class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null,
      displayModal: false,
      error: false,
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
          venue: addedEvent._embedded.venues.name,
          email: this.props.auth0.user.email,
        },
        method: "post",
        baseURL: `http://localhost:3001/favorites`,
      };
      const response = await axios(config);
      console.log(response.data, "<== response.data");
    } catch (e) {
      this.setState({ error: true });
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
          {this.props.eventData.map((attraction, idx) => (
            <Card key={idx} id="eventcard" style={{ width: "18rem" }}>
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
                  <strong>Min Price:</strong> ${attraction.priceRanges.Titlemin} |{" "}
                  <strong>Max Price:</strong> ${attraction.priceRanges.max}
                </Card.Text>
                <Card.Text>
                  <strong>Start Date:</strong>{" "}
                  {attraction.dates.start.localDate.toString} |{" "}
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
        <WelcomeCard />
      </>
    );
  }
}

export default withAuth0(EventCard);
