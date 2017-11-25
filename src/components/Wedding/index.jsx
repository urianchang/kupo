import React, { Component } from 'react';
import './wedding_details.css';

export default class Wedding extends Component {
  render() {
    return(
      <div className="wedding-body">
        <h1>Lazor Garden Alivila Cristea Church</h1>
        <img
          src="http://www.lazorgarden.com/images/image01bk.jpg"
          className="church-image"
          alt="Lazor Garden Alivila Cristea Church" />
        <iframe
          title="Google Map of wedding location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14292.921656689214!2d127.7144029!3d26.41604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e236c9ec5087172!2sLazor+Garden+Alivila+Cristea+Church!5e0!3m2!1sen!2sus!4v1511580999709"
          width="600"
          height="450"
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}
