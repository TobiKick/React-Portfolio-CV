import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WorkWithMe from './components/WorkWithMe';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeSelection: null,
            name: null,
            description: null,
            content: null
        }

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(value, name, description, content){
            this.setState({activeSelection: value, name: name, description: description, content: content});
    }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData} refresh={this.updateSelection}/>
        <div style={{opacity: 0}}>
            {this.state.activeSelection ?
                <Services selection={this.state.name} description={this.state.description} content={this.state.content} resumeData={resumeData}></Services> :
                <Services></Services>
            }
        </div>
        <Resume resumeData={resumeData}/>
        <WorkWithMe resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}



export default App;