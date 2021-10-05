// import React from 'react';
import { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
// import SavedEvents from './Components/SavedEvents';
import AboutUs from './Components/AboutUs';
// import Login from './Components/Login';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import devBios from './teamBios.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devInfo: devBios,
    };
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/saved-events'>{/* <SavedEvents /> */}</Route>

            <Route path='/about-us'>
              <AboutUs devInfo={this.state.devInfo} />
            </Route>

            <Route path='/login'>{/* <Login /> */}</Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
