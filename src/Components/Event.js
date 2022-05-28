import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import EventCard from "./EventCard";

class Event extends Component {
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
        <EventCard
          selectedEvent={this.state.selectedEvent}
          displayModal={this.state.displayModal}
          error={this.state.error}
          showModal={this.showModal}
          hideModal={this.hideModal}
          addEvents={this.addEvents}
          eventData={this.props.eventData}
        />
      </>
    );
  }
}

export default withAuth0(Event);
