import { Component } from "react";
import { Container } from "react-bootstrap";
import EventForm from "../EventForm";
import Event from "../Event";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container className="text-center">
        <EventForm
          getEvents={this.props.getEvents}
          setSearchQuery={this.props.setSearchQuery}
        />
        <Event
          eventData={this.props.eventData}
        />
      </Container>
    );
  }
}
export default Home;
