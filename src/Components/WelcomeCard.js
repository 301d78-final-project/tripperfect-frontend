import { Card, Row } from "react-bootstrap";
import tP2 from "../images/TripPerfect2.png";

export default function WelcomeCard() {
  return (
    <>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "30rem" }} id="welcome-card">
          <Card.Img variant="top" src={tP2} alt="welcome to TripPerfect" />
          <Card.Body>
            <Card.Title>WELCOME!</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
