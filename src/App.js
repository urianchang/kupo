import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//: Import page/template components
import Navbar from './components/nav';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component = { NoMatch } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
