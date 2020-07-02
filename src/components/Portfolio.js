import React, { Component } from 'react';

export default class Porfolio extends Component {


    handleItemClick(name, description, content) {
        this.props.refresh(true, name, description, content);
    }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" key={item.name}>
                  <div className="item-wrap">

                    <a onClick={() => this.handleItemClick(item.name, item.description, item.content)} href="#services" >

                      <img src={`${item.imgurl}`} alt="Portfolio component"className="item-img"/>
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
