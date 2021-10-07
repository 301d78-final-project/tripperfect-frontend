import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class EventModal extends Component {

  

  render() {
    console.log(this.props)
    return (
      
      <Modal show={this.props.displayModal} onHide={this.props.onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedEvent.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <img src={this.props.selectedEvent.images[0].url} className="img-fluid" alt={''}></img> */}
            {/* <p>{this.props.selectedEvent['dates']['start'].localDate}</p> */}
          </Modal.Body>

          <Modal.Footer>
            {/* <p>{this.props.dates.start.localDate}</p> */}
            <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
     
    )
  }
}

export default EventModal;