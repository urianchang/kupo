import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './wedding_details.css';
import treeBranch from './tree-branch.svg';

class BranchDivider extends Component {
  render() {
    return(
      <img src={treeBranch} alt="Cherry Blossom Tree branch" className="divider" />
    );
  }
}

export default class Wedding extends Component {
  render() {
    return(
      <div>
        <img
          src="http://www.lazorgarden.com/images/image01bk.jpg"
          className="image-60"
          alt="Lazor Garden Alivila Cristea Church" />
        <h1 className="important-text">
          Our Okinawa Wedding
        </h1>
        <div>
          <p>Thursday, April 12th, 2018</p>
          <p>2:45 PM</p>
          <p>Attire: Island Elegant</p>
          <Link to="/rsvp">
            <button className="button-pink">
              RSVP
            </button>
          </Link>
        </div>
        <BranchDivider />
        <div>
          <h2 className="important-text">Ceremony</h2>
          <p>Lazor Garden Alivila Cristea Church</p>
          <p>614 Gima, Yomitan-son, Nakagami-gun, Okinawa, Japan</p>
        </div>
        <div style={{marginTop: 2 + 'em'}}>
          <h2 className="important-text">Reception</h2>
          <p>Drinks and dinner to follow</p>
          <p>Banquet room located next to Cristea Church</p>
        </div>
        <BranchDivider />
        <div>
          <h2 className="important-text">Wedding Schedule</h2>
          <table className="centered-table">
            <tbody>
              <tr>
                <td>2:45 PM</td>
                <td>Guest Arrival 賓客抵達</td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>Wedding Ceremony 婚禮</td>
              </tr>
              <tr>
                <td>3:30 PM</td>
                <td>Celebration 慶祝儀式</td>
              </tr>
              <tr>
                <td>5:00 PM</td>
                <td>Wedding Reception 婚宴</td>
              </tr>
            </tbody>
          </table>
        </div>
        <BranchDivider />
        <div className="g-map">
          <iframe
            title="Google Map of wedding location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14292.921656689214!2d127.7144029!3d26.41604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e236c9ec5087172!2sLazor+Garden+Alivila+Cristea+Church!5e0!3m2!1sen!2sus!4v1511580999709"
            width="500"
            height="400"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    );
  }
}
