import React, { Component } from 'react';


export default class Awards extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="awards">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Awards and certifications:</h1>
          <div id="awards-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.awards && resumeData.awards.map((item)=>{
              return(
                <div className="columns awards-item" key={item.name}  >
                  <div className="item-wrap" style={{'backgroundColor': 'transparent', 'textAlign': 'center'}}>
                      <img className="item-img" src={`${item.imgurl}`} alt="Awards component"/>
                          <div className="overlay" >
                            <div className="awards-item-meta">
                              <h5>{item.name}</h5><br />
                              <p>{item.description}</p>
                            </div>
                          </div>
                          <h5>{item.name}</h5>
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
