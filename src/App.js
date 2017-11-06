import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//: Import page/template components
import Navbar from './components/nav';
import OurStory from './components/OurStory';
import NoMatch from './components/NoMatch';
import PendingPage from './components/PendingPage';
import Events from './components/Events';
import Rsvp from './components/RSVP';
import Wedding from './components/Wedding';

class App extends Component {
  render() {
    const isReady = true;
    if (isReady) {
      return (
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={OurStory} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/wedding' component={Wedding} />
              <Route exact path='/rsvp' component={Rsvp} />
              <Route exact path='/kupo' component={PendingPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div>
            <Switch>
              <Route component={PendingPage} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;