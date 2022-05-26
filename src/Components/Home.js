import { Component } from "react";
import { Container } from "react-bootstrap";
import EventForm from "./EventForm";
import EventCard from "./EventCard";
import "../css/EventCards.css";

class Home extends Component {
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

  render() {
    return (
      <Container className="text-center">
        <EventForm
          getEvents={this.props.getEvents}
          setSearchQuery={this.props.setSearchQuery}
        />
        <EventCard
          showModal={this.showModal}
          hideModal={this.hideModal}
          addEvents={this.addEvents}
          eventData={this.props.eventData}
          selectedEvent={this.state.selectedEvent}
          displayModal={this.state.displayModal}
        />
      </Container>
    );
  }
}
export default Home;
