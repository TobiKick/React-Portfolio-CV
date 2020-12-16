import React, { Component } from 'react';
import nl2br from 'react-newline-to-break';


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

                <h2>About Me</h2>
                <p>{nl2br(resumeData.aboutme_1)}</p>

                <div style={{color: 'white'}}>My approach is straightforward:</div>
                <p style={{marginLeft: '20px'}}>{nl2br(resumeData.aboutme_2)}</p>

                <div style={{color: 'white'}}>I graduated with a:</div>
                <p style={{marginLeft: '20px'}}>{nl2br(resumeData.aboutme_3)}</p>
            </div>
         </div>
      </section>
    );
  }
}