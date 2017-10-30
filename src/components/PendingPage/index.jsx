import React, { Component } from 'react';
import moogleWorker from './moogle_worker.jpg';
import './pending-page.css';

export default class PendingPage extends Component {
  render() {
    return(
      <div className="pending-page">
        <img src={moogleWorker} className="moogle-worker" alt="A Moogle Mailman" />
      </div>
    );
  }
}
