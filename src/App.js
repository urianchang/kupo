import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//: Import page/template components
import Header from './components/Header';
import OurStory from './components/OurStory';
import NoMatch from './components/NoMatch';
import PendingPage from './components/PendingPage';
import Events from './components/Events';
import Rsvp from './components/RSVP';
import Wedding from './components/Wedding';
import PhotoAlbum from './components/PhotoAlbum';

export default class App extends Component {
  render() {
      return (
        <Router>
          <ScrollToTop>
            <div>
              <Header />
              <div className="page-body">
                <Switch>
                  <Route exact path='/' component={OurStory} />
                  <Route exact path='/events' component={Events} />
                  <Route exact path='/wedding' component={Wedding} />
                  <Route exact path='/photos' component={PhotoAlbum} />
                  <Route exact path='/rsvp' component={Rsvp} />
                  <Route exact path='/kupo' component={PendingPage} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </ScrollToTop>
        </Router>
      );
  }
}
