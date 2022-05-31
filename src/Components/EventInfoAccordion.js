import { Accordion } from 'react-bootstrap';

const EventInfoAccordion = props => {
    return (
        <>
        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Event Info</Accordion.Header>
              <Accordion.Body>
                {
                  props.selectedEvent._embedded.venues[0].generalInfo
                    .generalRule
                }
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
    )
}

export default EventInfoAccordion