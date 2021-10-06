import { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class SavedEvents extends Component {

  getSavedEvents  =  async () => {
    const savedEventAPI = `http://localhost:3001/favorites?email=email@example.com`;
    const eventResponse = await axios.get(savedEventAPI);
    console.log(eventResponse, 'THIS IS eventResponse.data')   
    this.setState({
      eventData: eventResponse.data._embedded.events,
      
    });
  }


  render() {
    return (
      <>
      {this.props.eventData.map((attractions) => (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name of Event</th>
      <th>Link to TicketMaster</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>   
    <tr>
      <td>{attractions.images[0].url}</td>
      <td>{attractions.name}</td>
      <td><a href={attractions.url} target="_blank" rel="noopener noreferrer">ticket link</a></td>
      <td>{attractions._embedded.venues[0].city.name}</td>
    </tr>
  </tbody>
</Table>
))}
</>
    )
  }
}
export default SavedEvents;