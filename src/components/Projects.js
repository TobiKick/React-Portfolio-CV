import React, { Component } from 'react';
import nl2br from 'react-newline-to-break';

export default class Projects extends Component {

  render() {
    let project = this.props.item;

    return (
        <div id="projectBackground" onClick={this.props.hideProject}>
            <div id="projects">
                <div className="row work" style={{paddingBottom: '0px', marginBottom: '0px', borderBottom: '0px'}}>
                    <br />
                    <div className="twelve columns" style={{padding: '0 5px'}}>
                        <div className="eight columns">
                            <h3 style={{color: 'white'}}>{project.title}</h3>
                            <h5 style={{color: 'white'}}>{project.subtitle} <span> &bull; </span><em className="date">{project.year}</em></h5>
                            <p className="info" style={{margin: '0px 0px 9px', fontStyle: 'italic', fontSize: '90%'}}>with {project.technology}</p>

                            <div className="twelve columns" style={{margin: '0px 0px 9px'}}><b style={{color: 'white'}}>Goal: </b>{nl2br(project.goal)}</div>
                            <div className="twelve columns">
                                <div className="one column" style={{padding: '0px', margin: '0px 0px 9px'}}><b style={{color: 'white'}}>Tasks: </b></div>
                                <div className="eleven columns" style={{padding: '0px'}}>
                                    <ul>
                                        {project.tasks && project.tasks.map((task)=>{
                                            return(
                                            <div key={task.name}>
                                                <li>&bull; {nl2br(task.description)}</li>
                                            </div>
                                            )}
                                         )}
                                    </ul>
                                </div>
                            </div>
                            <div className="twelve columns" style={{margin: '0px 0px 0px'}}><b style={{color: 'white'}}>Outcome: </b>{nl2br(project.outcome)}</div>
                        </div>
                        <div className="four columns">

                                {project.images && project.images.map((item)=>{
                                    return(
                                        <div key={item.name} >
                                            <img className="item-img" src={`${item.url}`} alt={item.name}></img><br />
                                        </div>
                                    )}
                                )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}
