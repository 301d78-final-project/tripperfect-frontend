import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SavedEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventData: []
    }
  }

  getSavedEvents  =  async () => {
    const savedEventAPI = `http://localhost:3001/favorites?email=email@example.com`;
    const eventResponse = await axios.get(savedEventAPI);
    // console.log(eventResponse.data, 'THIS IS eventResponse.data from inside getSavedEvents')  
    this.setState({
      eventData: eventResponse.data,      
    });
  }

  componentDidMount = () => {
    this.getSavedEvents();
  }

  deleteEvents = async (id) => {
    // console.log(id, "THIS IS ID");
    // console.log(this.state.eventData, "THIS IS EVENT DATA");
    const deleteEvent = `http://localhost:3001/favorites/${id}`;
    await axios.delete(deleteEvent);
    this.getSavedEvents();
  }

  render() {
    return (
      <>
      <Table striped bordered hover>
      <thead>
    <tr>
      <th>Event Title</th>
      <th>Link to Ticket Master</th>
      <th>City</th>
      <th>Remove Item</th>
    </tr>
  </thead>
  <tbody>
  {this.state.eventData.map((attractions) => (  
  <tr>
  <td>{attractions.title}</td>
  <td>{attractions.description}</td>
  <td>{attractions.location}</td>
  <td><Button onClick={() => this.deleteEvents(attractions._id)}></Button></td>
  </tr>
  ))}
    </tbody>
    </Table>
</>
    )
  }
}
export default SavedEvents;