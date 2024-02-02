import React from 'react';
import Grid from '@material-ui/core/Grid';

const ContactUs = (props) => {
    const resumeData = props.resumeData;

    return (
      <section id="contact">
        <h2>Work With Me</h2>
        <div className="row">
            <p className="lead">
                  Feel free to contact me for my up-to-date CV or any suggestions
            </p>
        </div>

        <div className="row">
            <ul className="social-links">
                 {
                   resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                     return(
                       <li key={item.name}>
                        <Grid container style={{margin: '10px'}}>
                          <Grid item xs={6} style={{textAlign: 'right'}}>
                            <strong style={{marginRight: '20px'}}>{item.name}:</strong> 
                          </Grid>
                          <Grid item xs={6} style={{textAlign: 'left'}}>
                            <a href={item.url}>
                              <i style={{'fontSize':'28px'}} className={item.className} />
                            </a>
                            {/* <div style={{display: 'inline', marginLeft: '10px', verticalAlign: 'middle'}}>{item.id}</div> */}
                          </Grid>
                        </Grid>
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