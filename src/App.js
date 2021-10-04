import { Component } from 'react';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/saved-events">
            <Profile />
          </Route>

          <Route path="/about-us">
            <BookFormModal handleClose={this.handleClose} handleShow={this.handleShow} showModal={this.state.showModal} onCreate={this.handleCreate} />
          </Route>

          <Route path="/login">
            <UpdateForm handleClose={this.handleClose} handleShow={this.handleShow} showModal={this.state.showModal} onUpdate={this.handleCreate} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
