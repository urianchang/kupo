import React, { Component } from 'react';
import cherryBlossom from './cherryBlossom.svg';
import './cherryBlossom.css';

export default class CherryBlossom extends Component {
  render() {
    return(
      <img src={cherryBlossom} className="cherry-blossom" alt="A spinning cherry blossom" />
    );
  }
};
