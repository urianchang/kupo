import React, { Component } from 'react';
import './rsvp.css';

export default class Rsvp extends Component {
  render() {
    return(
      <div className="rsvp-form">
        <iframe
          title="Wedding RSVP Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9nU6HWHLmBflyk5LfmpvjqZZybvMxHv49ymvNgcvsdAeqyw/viewform?embedded=true"
          width="700"
          height="2600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0">
          Loading...
        </iframe>
      </div>
    );
  }
}
