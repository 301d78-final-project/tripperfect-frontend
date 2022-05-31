import { Container, Card, Row, Col, Button } from "react-bootstrap";

export default function SavedEventCard(props) {
  return (
    <>
      <Container key={props.idx} fluid>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.attraction.image} />
              <Card.Body>
                <Card.Title>{props.attraction.title}</Card.Title>
                <Card.Text>Event is in {props.attraction.location}</Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => props.deleteEvents(props.attraction._id)}
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
