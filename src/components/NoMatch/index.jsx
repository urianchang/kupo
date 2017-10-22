import React, { Component } from 'react';
import './NoMatch.css';

export default class NoMatch extends Component {
  render() {
    return(
      <div className="NoMatch-body">
        <h1>(┛◉Д◉)┛彡┻━┻</h1>
        <h2>PAGE NOT FOUND!</h2>
        <p>Maybe the page you are looking for has been removed, or you typed the wrong URL.</p>
      </div>
    );
  }
}
