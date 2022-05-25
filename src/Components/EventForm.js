import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class EventForm extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={(event) => this.props.getEvents(event)}>
          <Row className="justify-content-md-center">
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Please Enter City Name
              </Form.Label>
              <Form.Control
                onChange={(event) =>
                  this.props.setSearchQuery(event.target.value)
                }
                placeholder="Ex: Seattle"
              />
            </Col>
            <Col xs="auto" className="my-1">
              <Button
                type="submit"
                as="input"
                value="Submit"
                variant="primary"
              />{" "}
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}
