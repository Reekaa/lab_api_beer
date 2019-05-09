import React, {Component, Fragment} from 'react';
import BeerContainer from './container/BeerContainer.js';
import About from './About.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar.js"
import './App.css'

class App extends Component {

  render() {
    return (

      <Router>
        <Fragment>
          <Navbar />
          <Route
            path="/about"
            component={About}
          />
          <Route
            exact path="/"
            component={BeerContainer}
          />
        </Fragment>
      </Router>
    );
  }

}

export default App;
