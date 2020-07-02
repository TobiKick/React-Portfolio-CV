import React, { Component } from 'react';

export default class Services extends Component {

  render() {
  let content = this.props.content;

    return (
        <div id="services" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '98%'}}>
                <div style={{cursor: 'auto', background: 'transparent', border: '8px solid white', padding: '15px'}}>
                    <div className="row work" style={{paddingBottom: '0px', marginBottom: '0px', borderBottom: '0px'}}>
                        <div className="three columns header-col">
                            <h1><span style={{color: 'white', fontSize: '30px'}}>{this.props.selection}</span></h1>
                            <p>{this.props.description}</p>
                        </div>

                        <div className="nine columns main-col" >
                                {content && content.map((item)=>{
                                    return(
                                        <div className="row item" style={{color: 'white'}} key={item.project}>
                                            <div className="twelve columns" style={{padding: '10px'}}>
                                                <h5 style={{color: 'white'}}>{item.project}</h5>
                                                <p>{item.description}</p>
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
