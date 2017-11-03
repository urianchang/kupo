import React, { Component } from 'react';

export default class Rsvp extends Component {
  // constructor(){
  //   super();
  //
  // }
  render() {
    let theList = require('../guests.json');
    // theList.guest_list[1]["first_name"] = "hello world";
    return(
      <div>
        {theList.guest_list[0]["first_name"]}
        <hr></hr>
        {theList.guest_list[1]["first_name"]}
      </div>
    );
  }
}
