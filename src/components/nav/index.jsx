import React, { Component } from 'react';
import cherryBlossom from './cherryBlossom.svg';
import { Link } from 'react-router-dom';
import './nav.css';

//: Should we do a header that has a static top and then nav bar below?

class Navbar extends Component {
  render() {
    return(
      <div>
        <img src={cherryBlossom} className="cherry-blossom" alt="A Cherry Blossom" />
        <div className="Navbar">
          <ul className="Navlinks">
            <li><Link className="Navlink" to="/">Home</Link></li>
            <li><Link className="Navlink" to="/page1">Page 1</Link></li>
            <li><Link className="Navlink" to="/rsvp">RSVP</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
