import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SavedEvents from "./Components/SavedEvents";
import AboutUs from "./Components/AboutUs";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
      searchQuery: ''
    };
  }

  setSearchQuery = (searchQuery) => this.setState({ searchQuery: searchQuery });

  getEvents = async (event) => {
    event.preventDefault();
    try {
      const eventAPI = `http://localhost:3001/events?city=${this.state.searchQuery}&startDateTime`;
      const eventResponse = await axios.get(eventAPI);
      console.log(eventResponse, "<== eventResponse");
      console.log(
        eventResponse.data._embedded.events,
        "<== eventResponse.data._embedded.events"
      );
      this.setState({ eventData: eventResponse.data._embedded.events });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/saved-events">
              {this.props.auth0.isAuthenticated ? (
                <SavedEvents
                  eventData={this.state.eventData}
                  getEvents={this.getEvents}
                />
              ) : (
                <Login />
              )}
            </Route>
            <Route exact path="/">
              <Home
                setSearchQuery={this.setSearchQuery}
                eventData={this.state.eventData}
                getEvents={this.getEvents}
              />
            </Route>
            <Route path="/about-us">
              <AboutUs devInfo={this.state.devInfo} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
