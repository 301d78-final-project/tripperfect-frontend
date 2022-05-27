import { Component } from "react";
import { Container } from "react-bootstrap";
import EventForm from "./EventForm";
import EventCard from "./EventCard";
import "../css/EventCards.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  // hideModal = () => this.setState({ displayModal: false });

  render() {
    return (
      <Container className="text-center">
        <EventForm
          getEvents={this.props.getEvents}
          setSearchQuery={this.props.setSearchQuery}
        />
        <EventCard
          // hideModal={this.hideModal}
          addEvents={this.addEvents}
          eventData={this.props.eventData}
        />
      </Container>
    );
  }
}
export default Home;
