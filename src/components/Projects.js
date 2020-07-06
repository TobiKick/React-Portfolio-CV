import React, { Component } from 'react';

export default class Projects extends Component {

  render() {
  let projects = this.props.projects;

    return (

        <div id="projects" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%'}}>
            <img src={"images/plain-white-background.jpg"} alt="plain white background" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '100%', width: '100%', opacity: '90%'}}></img>
            <div style={{cursor: 'auto', backgroundColor: 'transparent', padding: '15px'}}>
                    <div className="row work" style={{paddingBottom: '0px', marginBottom: '0px', borderBottom: '0px'}}>

                        <div className="three columns header-col">
                            <h1><span style={{fontSize: '30px'}}>{this.props.selection}</span></h1>
                            <p>{this.props.description}</p>
                        </div>

                        <div className="nine columns main-col" >
                                {projects && projects.map((item)=>{
                                    return(
                                        <div className="row item" key={item.title}>
                                            <div className="twelve columns" style={{padding: '10px'}}>
                                                <h5>{item.title}</h5>
                                                <p className="info" style={{margin: '0px 0px 9px', fontStyle: 'italic', fontSize: '90%'}}>
                                                    {item.subtitle}
                                                    <span> &bull; </span><em className="date">{item.year}</em></p>
                                                <p style={{margin: '0px 0px 9px'}}>{item.description}</p>
                                            </div>
                                        </div>
                                    )})
                                }
                        </div>
                    </div>
                </div>

        </div>
    );
  }
}
