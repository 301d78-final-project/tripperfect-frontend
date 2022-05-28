import { Form, Row, Col, Button } from "react-bootstrap";

export default function EventForm(props) {
  return (
    <>
      <Form onSubmit={(event) => props.getEvents(event)}>
        <Row className="justify-content-md-center">
          <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Please Enter City Name
            </Form.Label>
            <Form.Control
              onChange={(e) => props.setSearchQuery(e.target.value)}
              placeholder="Ex: Seattle"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit" as="input" value="Submit" variant="light" />{" "}
          </Col>
        </Row>
      </Form>
    </>
  );
}
