import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AuthPrompt from './components/AuthPrompt';

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
  constructor() {
    super();
    this.state = {isPublic: false};
    this.checkReady = this.checkReady.bind(this);
  }

  checkReady(arg){
    this.setState({isPublic: arg});
  }

  render() {
    const isPublic = this.state.isPublic;
    if (isPublic) {
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
    } else {
      return (
        <Router>
          <AuthPrompt checkReady={this.checkReady} />
        </Router>
      );
    }
  }
}
