import React, { Component } from 'react';
import './ourstory.css';


export default class OurStory extends Component {
  render() {
    let theList = require('../guests.json');
    theList.guest_list[1]["first_name"] = "hello world";
    return(
      <div>
        <h1>Angela and Urian</h1>
        <p>
          <span className="blue-important">April 12, 2018</span> at <span className="blue-important">Lazor Garden Alivila Cristea Church</span> in <span className="blue-important">Okinawa, Japan</span>
        </p>
      </div>
    );
  }
}
