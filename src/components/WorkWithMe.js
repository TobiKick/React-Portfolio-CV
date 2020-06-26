import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>

         <div className="row">
            <div className="columns contact-details">
                <h2 style={{color:'#fff'}}>Contact Details</h2>
                <p className="address">
                <span>{resumeData.name}</span>
                <br></br>
                <span>{resumeData.address}</span>
                <br></br>
                <span>{resumeData.email}</span>
                <br></br>


            </p>
            </div>
            <div className="columns contact-details">
            <h2 style={{color:'#fff'}}>Social Media</h2>
                <ul className="social-links">
                     {
                       resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                         return(
                           <li key={item.name}> {item.name}: <a href={item.url}>
                             <i className={item.className} />
                             </a> {item.id}
                           </li>
                         )
                       })
                     }
                </ul>
            </div>
         </div>

        </section>
        );
  }
}