import React, { Component } from 'react';

export default class OurStory extends Component {
  render() {
    return(
      <div>
        <img
          src="https://imgur.com/tx8HTsZ.jpg"
          alt="Angela and Urian"
          className="image-60" />
        <h1 className="important-text">Our Story</h1>
        <div className="left-aligned">
          <p>
            We met each other in college in a small seminar class during the fall quarter of freshman year at UCLA. Our first time chatting was along the Bruin Walk as we strolled back to the dorms after class. The seminar was called “What is Time?” but now all we can recall from the class was the time spent with each other and the time that grew our relationship from friendship  into love.
          </p>
          <p>
            We started dating at the end of our senior year at UCLA. For the next four years, we have lost track of the number of times we drove up and down Highway 5 between San Diego, where Urian lived, and Los Angeles, where Angela was at USC. Our relationship has been filled with traveling adventures, from Canada to Costa Rica and from Peru to Cancun. Urian proposed during our last night in Italy, thus starting our next adventure together of marriage. From our travels, our favorite destination was Japan, and thus we decided to have our wedding in Okinawa, Japan so that we can enjoy the scenery and culture with you, our family and friends.
          </p>
        </div>
      </div>
    );
  }
}
