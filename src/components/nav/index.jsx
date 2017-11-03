import React, { Component } from 'react';
import bg from './bg.svg';
import { Link } from 'react-router-dom';
import './nav.css';

class Navbar extends Component {
  render() {
    return(
      <div className="header">
        <img src={bg} className="header-bg" alt="header background" />
        <div className="navbar">
          <ul className="navlinks">
            <li><Link className="navlink" to="/">Our Story</Link></li>
            <li><Link className="navlink" to="/wedding">Wedding</Link></li>
            <li><Link className="navlink" to="/events">Events</Link></li>
            <li><Link className="navlink" to="/rsvp">RSVP</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
