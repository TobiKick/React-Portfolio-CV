import React, { Component } from 'react';
import nl2br from 'react-newline-to-break';


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <h2>About Me</h2>
            <img className="profile-pic"  src="images/profilepic-min.jpg" alt="" />
         </div>
         <div className="row">
            <p>{nl2br(resumeData.aboutme_1)}</p>

            <h3>My approach is straightforward:</h3>
            <p>{nl2br(resumeData.aboutme_2)}</p>

            <h3>I graduated with a:</h3>
            <p>{nl2br(resumeData.aboutme_3)}</p>
         </div>
      </section>
    );
  }
}