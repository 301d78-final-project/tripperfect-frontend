import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button, Row } from "react-bootstrap";
import EventModal from "./EventModal";

class EventCard extends Component {
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
                <Button onClick={() => this.props.showModal(attraction.name)}>
                  More Info
                </Button>
                <EventModal
                  selectedEvent={this.props.selectedEvent}
                  displayModal={this.props.displayModal}
                  onHide={this.props.hideModal}
                />

                {this.props.auth0.isAuthenticated ? (
                  <Button
                    id="eventbutton"
                    variant="primary"
                    onClick={() => this.props.addEvents(attraction.name)}
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
