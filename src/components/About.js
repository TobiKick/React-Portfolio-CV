import React, { Component } from 'react';
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
               <p>
                    {resumeData.aboutme_1}<br></br>
                    {resumeData.aboutme_2}
               </p>
               <p>
                    {resumeData.aboutme_3}
               </p>
            </div>
         </div>
      </section>
    );
  }
}