import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../css/SavedEvents.css";
import { withAuth0 } from "@auth0/auth0-react";

import axios from "axios";

class SavedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
    };
  }

  getSavedEvents = async () => {
    const savedEventAPI = `http://localhost:3001/favorites?email=${this.props.auth0.user.email}`;
    const eventResponse = await axios.get(savedEventAPI);
    this.setState({ eventData: eventResponse.data });
  };

  componentDidMount = () => this.getSavedEvents();
  
  deleteEvents = async (id) => {
    const deleteEvent = `http://localhost:3001/favorites/${id}`;
    await axios.delete(deleteEvent);
    this.getSavedEvents();
  };

  render() {
    return (
      <>
        <Table striped bordered hover id="eventsTable">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>City</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {this.props.eventData.map((attractions, idx) => (
              <tr>
                <td>
                  <a href={attractions.description}key={idx}>{attractions.title}</a>
                </td>
                <td>{attractions.location}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => this.deleteEvents(attractions._id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
export default withAuth0(SavedEvents);
