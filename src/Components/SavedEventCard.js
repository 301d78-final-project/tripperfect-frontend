import { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

export default class SavedEventCard extends Component {
  render() {
    return (
      <>
        <Container key={this.props.idx}fluid>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col sm={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.attraction.image} />
                <Card.Body>
                  <Card.Title>{this.props.attraction.title}</Card.Title>
                  <Card.Text>Event is in {this.props.attraction.location}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => this.props.deleteEvents(this.props.attraction._id)}
                  >
                    Delete Event
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
