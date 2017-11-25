import React, { Component } from 'react';

let subsections = [
  {
    'title': "Details"
  },
  {
    'title': "Location"
  },
  {
    'title': "Registry"
  }
];

export default class Wedding extends Component {
  constructor() {
    super();
    this.makeSubsection = this.makeSubsection.bind(this);
  }

  makeSubsection(params, i) {
    return(
      <div key={i}>
        <h1>{ params['title'] }</h1>
      </div>
    );
  }

  render() {
    return(
      <div className="wedding-body">
        { subsections.map(this.makeSubsection) }
      </div>
    );
  }
}
