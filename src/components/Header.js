import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#contact">Work With Me</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#awards">Awards</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div style={{marginTop: '10%'}}></div>
            <div className="banner-text">
              <Grid container>
                <Grid item xs={3}>
                  <img className="profile-pic"  src="images/profilepic-min.jpg" alt="" />
                </Grid>
                <Grid item xs={9}>
                  <h1 className="responsive-headline">{resumeData.name}</h1>
                  <h2 style={{color: '#313131', fontFamily:'sans-serif', margin: '1em'}}>{resumeData.role}</h2>
                  <h3 style={{color: '#313131', fontFamily:'sans-serif'}}>{resumeData.roleDescription}</h3>
                  <hr/>
                  <ul className="social">
                      {
                        resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                          return(
                                  <li key={item.name}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className} style={{color: '#0066ff'}}></i></a>
                                  </li>
                                )
                        })
                      }
                  </ul>
                </Grid>
              </Grid>
            </div>

            {/* <div className="banner-image"></div> */}
         </div>

         {/* <div className="scrolldown">
            <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
        </div> */}

        </header>
      </React.Fragment>
    );
  }
}