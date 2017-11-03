import React, { Component } from 'react';
import bg from './bg.svg';
import { NavLink } from 'react-router-dom';
import './nav.css';

class Navbar extends Component {
  render() {
    return(
      <div className="header">
        <img src={bg} className="header-bg" alt="header background" />
        <div className="navbar">
          <ul className="navlinks">
            <li>
                <NavLink
                  className="navlink"
                  activeClassName="active"
                  exact to="/">
                  Our Story
                </NavLink>
            </li>
            <li>
                <NavLink
                  className="navlink"
                  activeClassName="active"
                  to="/wedding">
                  Wedding
                </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                activeClassName="active"
                to="/events">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                activeClassName="active"
                to="/rsvp">
                RSVP
              </NavLink>  
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
