import { useState } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import SavedEventCard from "../SavedEventCard";
import "./SavedEvents.css";

function SavedEvents(props) {
  let [eventData, setEventData] = useState([]);

  const getSavedEvents = async () => {
    const savedEventAPI = `http://localhost:3001/favorites?email=${props.auth0.user.email}`;
    const eventResponse = await axios.get(savedEventAPI);
    setEventData(eventData = eventResponse.data );
  };

  const deleteEvents = async (id) => {
    const deleteEvent = `http://localhost:3001/favorites/${id}`;
    await axios.delete(deleteEvent);
    getSavedEvents();
  };

    return (
      <>
        {eventData.map((attraction, idx) => (
          <SavedEventCard
            eventData={eventData}
            attraction={attraction}
            key={idx}
            deleteEvents={deleteEvents}
          />
        ))}
      </>
    );
  }

export default withAuth0(SavedEvents);
