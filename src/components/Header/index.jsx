import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import './header.css';

const NavbarLinks = [
  {
    'url': "/",
    'exact': true,
    'title': "Our Story"
  },
  {
    'url': "/wedding",
    'exact': false,
    'title': "Wedding"
  },
  {
    'url': "/events",
    'exact': false,
    'title': "Events"
  },
  {
    'url': "/photos",
    'exact': false,
    'title': "Photos"
  },
  {
    'url': "/rsvp",
    'exact': false,
    'title': "RSVP"
  },
];

export default class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="header-bg"></div>
        <h1 className="header-text">Angela & Urian</h1>
        <NavigationBar links={NavbarLinks} />
      </div>
    );
  }
}


class NavigationBar extends Component {
  constructor(props){
    super(props);
    this.makeLinks = this.makeLinks.bind(this);
  }

  makeLinks(params, i) {
    if (params['exact']) {
      return(
        <li key={i}>
          <NavLink
            className="navlink"
            activeClassName="activated"
            exact to={params['url']}>
            {params['title']}
          </NavLink>
        </li>
      );
    } else {
      return(
        <li key={i}>
          <NavLink
            className="navlink"
            activeClassName="activated"
            to={params['url']}>
            {params['title']}
          </NavLink>
        </li>
      );
    }
  }

  render() {
    return(
      <div className="navbar">
        <ul className="navlinks">
          {this.props.links.map(this.makeLinks)}
        </ul>
      </div>
    );
  }
}
