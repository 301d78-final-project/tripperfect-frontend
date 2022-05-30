import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import SavedEventCard from "../SavedEventCard";
import "./SavedEvents.css";

class SavedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
      dislpayDeleteModal: false,
    };
  }

  getSavedEvents = async () => {
    const savedEventAPI = `http://localhost:3001/favorites?email=${this.props.auth0.user.email}`;
    const eventResponse = await axios.get(savedEventAPI);
    this.setState({ eventData: eventResponse.data });
  };

  deleteEvents = async (id) => {
    const deleteEvent = `http://localhost:3001/favorites/${id}`;
    await axios.delete(deleteEvent);
    this.getSavedEvents();
  };

  componentDidMount = () => {
    this.getSavedEvents();
  };

  render() {
    return (
      <>
        {this.state.eventData.map((attraction, idx) => (
          <SavedEventCard
            eventData={this.state.eventData}
            attraction={attraction}
            idx={idx}
            deleteEvents={this.deleteEvents}
          />
        ))}
      </>
    );
  }
}
export default withAuth0(SavedEvents);
