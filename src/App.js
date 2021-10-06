// import React from 'react';
import { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import SavedEvents from './Components/SavedEvents';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import devBios from './teamBios.json';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devInfo: devBios,
      user: null,
      eventData: []
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery: searchQuery })
  }

  getEvents = async (event) => {
    event.preventDefault();
    try {
      console.log(`made it here`)
      const eventAPI = `http://localhost:3001/events?city=${this.state.searchQuery}&startDateTime`;
      const eventResponse = await axios.get(eventAPI);
      console.log(eventResponse.data._embedded.events, 'THIS IS eventResponse.data')
      this.setState({
        eventData: eventResponse.data._embedded.events,
      });
      this.getMap();

    } catch (error) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path='/'>
              <Home setSearchQuery={this.setSearchQuery} eventData={this.state.eventData} getEvents={this.getEvents} />
            </Route>

            <Route path='/saved-events'>
              <SavedEvents eventData={this.state.eventData} getEvents={this.getEvents} />
            </Route>

            <Route path='/about-us'>
              <AboutUs devInfo={this.state.devInfo} />
            </Route>

            <Route path='/login'>
            {
             this.state.user ? (
              <SavedEvents user={this.state.user}/>
              ) : (
                <Login onLogin={this.loginHandler}/>
              ) 
            }
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
