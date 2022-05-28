import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./SavedEvents.css";

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
    this.setState({
      eventData: eventResponse.data,
    });
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
          <Container key={idx} fluid>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col sm={3}>
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src={}/> */}
                  <Card.Body>
                    <Card.Title>{attraction.title}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => this.deleteEvents(attraction._id)}
                    >
                      Delete Event
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </>
    );
  }
}
export default withAuth0(SavedEvents);
