import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import './header.css';

class HeaderTop extends Component {
  render() {
    return(
      <div>
        <div className="header-bg"></div>
        <h1 className="header-text">Angela & Urian</h1>
      </div>
    );
  }
}


class Navbar extends Component {
  render() {
    return(
      <div className="header">
        <HeaderTop />
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
