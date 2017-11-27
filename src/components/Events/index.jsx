import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

export default class Events extends Component {
  render() {
    return(
      <div>
        <div className="event-container">
          <img src="https://i.imgur.com/wQJ1uH6.png"
            alt="Kyoto"
            className="image-50" />
          <h2 className="important-text">
            Thursday, April 5 to Tuesday, April 10 - Kyoto / Osaka
          </h2>
          <p>
            We will be enjoying the cherry blossoms in the Kyoto and Osaka
            area. Please let us know if you will also be in town!
          </p>
        </div>
        <div className="event-container">
          <img src="https://i.imgur.com/hPZliPT.jpg"
            alt="Kerama Islands"
            className="image-50" />
          <h2 className="important-text">
            Wednesday, April 11 - Snorkel Trip from Naha
          </h2>
          <p>Details</p>
          <p>Please contact us by DATE, if you would like to join</p>
        </div>
        <div className="event-container">
          <img src="https://media.xogrp.com/images/d3fdd8a8-e8dd-4fd0-ae39-68859124c733~rt_0-cr_0.0.749.375-rs_1024.h?compress=true"
            alt="Bell at Cristea Church"
            className="image-50" />
          <h2 className="important-text">
            Thursday, April 12 - Wedding Day
          </h2>
          <p>Please see <Link to="/wedding">"Our Okinawa Wedding"</Link></p>
        </div>
        <div className="event-container">
          <img src="https://i.imgur.com/PDlm4GV.jpg"
            alt="Okinawa Churaumi Aquarium"
            className="image-50" />
          <h2 className="important-text">
            Friday, April 13 - ???
          </h2>
          <p>TBD</p>
        </div>
      </div>
    );
  }
}
