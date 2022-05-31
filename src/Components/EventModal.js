import { Modal, Image, Button, ModalBody } from "react-bootstrap";
import EventInfoAccordion from "./EventInfoAccordion";

const EventModal = (props) => {
  if (!props.selectedEvent) return null;

  return (
    <Modal show={props.displayModal} onHide={props.onHide} backdrop="static">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.selectedEvent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {props.selectedEvent.dates.start.localDate} at{" "}
          {props.selectedEvent.dates.start.localTime} local time
        </Modal.Body>
        <ModalBody>
          {" "}
          PRICE RANGE: ${props.selectedEvent.priceRanges[0].min} - $
          {props.selectedEvent.priceRanges[0].max}
        </ModalBody>
        <ModalBody>
          PROMOTER: {props.selectedEvent.promoter.description}
        </ModalBody>
        <ModalBody>{props.selectedEvent.ticketLimit.info}</ModalBody>
        <Image
          alt=""
          src={props.selectedEvent.seatmap.staticUrl}
          style={{ height: 300 }}
        />
        <EventInfoAccordion selectedEvent={props.selectedEvent} />
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default EventModal;
