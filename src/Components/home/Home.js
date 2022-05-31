import { Container } from "react-bootstrap";
import EventForm from "../EventForm";
import Event from "../Event";
import "./Home.css";

const Home = (props) => {
    return (
      <Container className="text-center">
        <EventForm
          getEvents={props.getEvents}
          handleSearchQuery={props.handleSearchQuery}
        />
        <Event
          eventData={props.eventData}
        />
      </Container>
    );
  }

export default Home;
