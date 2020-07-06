import React, { Component } from 'react';

export default class Porfolio extends Component {


    handleItemClick(name, description, projects) {
        this.props.refresh(true, name, description, projects);
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
                  <div className="item-wrap">

                    <a onClick={() => this.handleItemClick(item.name, item.description, item.projects)} href="#projects" >
                      <img className="item-img" src={`${item.imgurl}`} alt="Portfolio component"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                    </a>
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
}
