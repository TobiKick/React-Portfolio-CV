import React from 'react';

const ContactUs = (props) => {
    const resumeData = props.resumeData;

    return (
      <section id="contact">
        <div className="row">
            <p className="lead">
                  Feel free to contact me for any work or suggestions:
            </p>
        </div>

        <div className="row">
            <p className="address"><a href="mailto:tkick93@gmail.com?subject = Inquiry freelancer"><span id="mailIcon"></span></a>{resumeData.email}</p>

        </div>

        <div className="row">
            <ul className="social-links">
                 {
                   resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                     return(
                       <li key={item.name}><strong>{item.name}:</strong> <a href={item.url}>
                         <i style={{'fontSize':'18px'}} className={item.className} />
                         </a> {item.id}
                       </li>
                     )
                   })
                 }
            </ul>
        </div>

    </section>
    );
}

export default ContactUs;