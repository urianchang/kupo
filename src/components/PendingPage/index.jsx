import React, { Component } from 'react';
import moogleWorker from './moogle_worker.png';
import './pending-page.css';

export default class PendingPage extends Component {
  render() {
    return(
      <div className="pending-page">
        <h1 className="pending-text">Under construction, kupo!</h1>
        <img src={moogleWorker} className="moogle-worker" alt="A Moogle Mailman" />
      </div>
    );
  }
}
