import { Component } from "react";
import axios from "axios";
// import { Container, Card, Row, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
// import EventModal from "./EventModal";
import EventCard from "./EventCard";
import EventForm from "./EventForm";
import "../css/EventCards.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      searchQuery: "",
      displayModal: false,
      selectedEvent: null,
    };
  }

  addEvents = async (myEvent) => {
    try {
      let addedEvent = this.props.eventData.find(attraction => attraction.name === myEvent);

      const config = {
        data: {
          title: addedEvent.name,
          description: addedEvent.url,
          location: addedEvent._embedded.venues[0].city.name,
          email: this.props.auth0.user.email,
        },
        method: 'post',
        baseURL: `http://localhost:3001/favorites`,
      };
      const response = await axios(config);
      console.log(response.data, "<== response.data inside addEvents");
    } catch (e) {
      this.setState({ error: true });
    }
  };

  showModal = (title) => {
    const selectedEvent = this.props.eventData.find((singleEvent) => singleEvent.name === title);
    this.setState({ displayModal: true, selectedEvent: selectedEvent });
  };

  hideModal = () => this.setState({ displayModal: false });
  
  render() {
    return (
      <Container className="text-center">
        <EventForm getEvents={this.props.getEvents} 
        setSearchQuery={this.props.setSearchQuery}
        />
        <EventCard 
        eventData={this.props.eventData}
        showModal={this.showModal}
        hideModal={this.hideModal}
        // selectedEvent={this.state.selectedEvent}
        // displayModal={this.state.displayModal}
        // addEvents={this.addEvents}
        />
      </Container>
    );
  }
}
export default Home;
