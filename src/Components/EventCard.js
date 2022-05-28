// import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, Row } from "react-bootstrap";
import EventModal from "./EventModal";
import WelcomeCard from "./WelcomeCard";

const EventCard = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.eventData.map((attraction, idx) => (
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
              <Button onClick={() => props.showModal(attraction.name)}>
                More Info
              </Button>
              <EventModal
                selectedEvent={props.selectedEvent}
                displayModal={props.displayModal}
                onHide={props.hideModal}
              />

              {props.auth0.isAuthenticated ? (
                <Button
                  id="eventbutton"
                  variant="primary"
                  onClick={() => props.addEvents(attraction.name)}
                >
                  Save Event!
                </Button>
              ) : (
                <Button id="eventbutton" variant="primary" onClick={() => loginWithRedirect()}>
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

export default withAuth0(EventCard);
