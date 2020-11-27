import React, { Component } from 'react';
import Projects from './Projects';



export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideProject: false,
      projectDetails: ""
    };
    this.showProject = this.showProject.bind(this);
    this.hideProject = this.hideProject.bind(this);
  }

  showProject(item){
      this.setState({showHideProject: true, projectDetails: item});
  }

  hideProject(){
      this.setState({showHideProject: false})
  }


  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Have a look at some of my projects:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" key={item.name}>
                  <div className="item-wrap" style={{'width': '100%'}}>

                    <div style={{cursor: 'pointer'}} onClick={() => this.showProject(item)}>
                      <img className="item-img" src={`${item.imgurl}`} alt="Portfolio component"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div>
        {this.state.showHideProject && <Projects item={this.state.projectDetails} hideProject={this.hideProject} />}
      </div>
  </section>

  );
  }
}
