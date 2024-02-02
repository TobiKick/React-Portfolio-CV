import React from 'react';
import nl2br from 'react-newline-to-break';



function Project (props) {
    const project = props.project;

    return (
        <section id="project">
            <div className="row work">
                <div id="header" className="twelve columns">
                    <div className="one column"></div>
                    <div className="ten columns">
                        <h3>{nl2br(project.title)}</h3>
                        <em className="date">{project.year}</em>
                        <h4>{project.subtitle}</h4>
                        <p className="info">with {project.technology}</p>
                    </div>
                    <div className="one column"></div>
                </div>


                <div id="goal" className="twelve columns subsection outer-div">
                    <div className="one column"></div>
                    <div className="five columns inner-div">
                        <h5>Goal</h5>
                        <br />
                        <p className="content">{nl2br(project.goal)}</p>
                    </div>
                    <div className="five columns inner-div">
                        <div key={project.images.img_1.name} >
                            <img className={"item-img " + (project.images.img_1.curved ? 'curved' : '')} src={`${project.images.img_1.url}`} alt={project.images.img_1.name}></img><br />
                        </div>
                    </div>
                    <div className="one column"></div>
                </div>

                <div id="tasks" className="twelve columns subsection outer-div">
                    <div className="one column"></div>
                    <div className="five columns inner-div">
                        <div key={project.images.img_2.name} >
                            <img className={"item-img " + (project.images.img_2.curved ? 'curved' : '')} src={`${project.images.img_2.url}`} alt={project.images.img_2.name}></img><br />
                        </div>
                    </div>
                    <div className="five columns inner-div">
                        <h5>Tasks</h5>
                        <br />
                        <p className="content">
                                {project.tasks && project.tasks.map((task)=>{
                                    return(
                                    <div key={task.name}>
                                        <p>&bull; {nl2br(task.description)}</p>
                                    </div>
                                    )}
                                 )}
                        </p>
                    </div>
                    <div className="one column"></div>
                </div>

                <div id="outcome" className="twelve columns subsection outer-div">
                    <div className="one column"></div>
                    <div className="five columns inner-div">
                        <h5>Outcome</h5>
                        <br />
                        <p className="content">{nl2br(project.outcome)}</p>
                    </div>
                    <div className="five columns inner-div">
                        <div key={project.images.img_3.name} className="img-div" >
                            <img className={"item-img " + (project.images.img_3.curved ? 'curved' : '')} src={`${project.images.img_3.url}`} alt={project.images.img_3.name}></img><br />
                        </div>
                    </div>
                    <div className="one column"></div>
                </div>

            </div>
        </section>
    );
}

export default Project;