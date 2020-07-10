import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
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
            projects: null
        }

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(value, name, description, projects){
            this.setState({activeSelection: value, name: name, description: description, projects: projects});
    }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Portfolio resumeData={resumeData} refresh={this.updateSelection}/>
        <div style={{opacity: 0}}>
            {this.state.activeSelection ?
                <Projects selection={this.state.name} description={this.state.description} projects={this.state.projects} resumeData={resumeData}></Projects> :
                <Projects></Projects>
            }
        </div>
        <Resume resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <WorkWithMe resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}



export default App;