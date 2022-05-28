import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Home from './components/home/Home';
import Login from './components/Login';
import SavedEvents from './components/savedevents/SavedEvents';
import AboutUs from './components/AboutUs';
import Footer from './components/footer/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      eventData: [],
      error: false
    };
  }

  setSearchQuery = searchQuery => this.setState({ searchQuery: searchQuery });

  getEvents = async event => {
    event.preventDefault();
    try {
      const eventAPI = `http://localhost:3001/events?city=${this.state.searchQuery}&startDateTime`;
      const eventResponse = await axios.get(eventAPI);

      console.log(eventResponse, '<== eventResponse')
      console.log(eventResponse.data._embedded.events,'<== eventResponse.data._embedded.events');
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
            <Route path='/saved-events'>
              {this.props.auth0.isAuthenticated ? (
                <SavedEvents
                  eventData={this.state.eventData}
                  getEvents={this.getEvents}
                />
              ) : (
                <Login />
              )}
            </Route>
            <Route exact path='/'>
              <Home
                setSearchQuery={this.setSearchQuery}
                eventData={this.state.eventData}
                getEvents={this.getEvents}
              />
            </Route>
            <Route path='/about-us'>
              <AboutUs/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
