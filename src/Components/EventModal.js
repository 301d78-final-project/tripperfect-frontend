import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class EventModal extends Component {
  render() {
    if (!this.props.selectedEvent) return null;
    
    return (
      <Modal show={this.props.displayModal} onHide={this.props.onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedEvent.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h2>GENERAL INFO</h2>
            <ul>
              <li>
                {this.props.selectedEvent.dates.start.localDate} at{" "}
                {this.props.selectedEvent.dates.start.localTime} local time
              </li>
              <li>EVENT INFO: {this.props.selectedEvent.info}</li>
              <li>
                PRICE RANGE: ${this.props.selectedEvent.priceRanges[0].min} - $
                {this.props.selectedEvent.priceRanges[0].max}
              </li>
              <li>PROMOTER: {this.props.selectedEvent.promoter.description}</li>
              <li>{this.props.selectedEvent.ticketLimit.info}</li>
            </ul>
            <img
              alt=""
              src={this.props.selectedEvent.seatmap.staticUrl}
              style={{ height: 300 }}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default EventModal;
