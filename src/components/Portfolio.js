import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Project from './Project';
import nl2br from 'react-newline-to-break';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));



function Portfolio(props) {
    const resumeData = props.resumeData;
    let [selectedProject, setSelectedProject] = useState("");

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, item) => {
      setAnchorEl(event.currentTarget);
      setSelectedProject(item);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <>
        <section id="portfolio">
          
         {/*  <div className="row">
            <div className="twelve columns collapsed">
              <h2>Have a look at some of my student projects:</h2>

              <Grid container spacing={5}>
              {
                resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
                  return(
                    <>
                      <Grid item xs={2}></Grid>
                      {index % 2 === 0 ? 
                        <>
                          <Grid item xs={4} style={{'textAlign': 'center'}}>
                            <img className="item-img" src={`${item.imgurl}`} alt="Portfolio component"/>
                          </Grid>
                          <Grid item xs={4} style={{'textAlign': 'center'}}>
                            TExt what i did during .NET / C# Development
                          </Grid>
                        </>
                        :
                        <>
                          <Grid item xs={4} style={{'textAlign': 'center'}}>
                            TExt what i did during .NET / C# Development
                          </Grid>
                          <Grid item xs={4} style={{'textAlign': 'center'}}>
                            <img className="item-img" src={`${item.imgurl}`} alt="Portfolio component"/>
                          </Grid>
                        </>
                      }
                      <Grid item xs={2}></Grid>
                    </>
                  );
                })
              }
              </Grid>
            </div>
          </div>
          
          <div style={{'marginTop': '150px'}}></div>
 */}
          <div className="row">
            <div className="twelve columns collapsed">
              <h2>Have a look at some of my student projects:</h2>
              <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                    <div className="columns portfolio-item" key={item.title}>
                      <div className="item-wrap">
                        <div>
                          <div style={{cursor: 'pointer'}} onClick={(e) => { handleClick(e, item); }}>
                            <img className="item-img" src={`${item.imgurl}`} alt="Portfolio component"/>
                                <div className="overlay">
                                  <div className="portfolio-item-meta">
                                    <h5>{nl2br(item.title)}</h5>
                                    <br />
                                    <p>{nl2br(item.subtitle)}</p>
                                  </div>
                                </div>
                          </div>
                          <Popover
                            id={id}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {marginTop: '5%', height: '90%'},
                            }}
                          >
                            <Typography className={classes.typography}>
                                <Project project={selectedProject}/>
                            </Typography>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
        </section>  
      </>
    );
}

export default Portfolio;