import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Project from './Project';

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
      <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h2>Have a look at some of my projects:</h2>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
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
                                    <h5>{item.title}</h5>
                                    <p>{item.subtitle}</p>
                                  </div>
                                </div>
                          </div>
                          <Popover
                            id={id}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {marginTop: '5%', width: '60%', height: '75%'},
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

    );
}

export default Portfolio;