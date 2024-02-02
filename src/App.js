import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import WorkWithMe from './components/WorkWithMe';
import Footer from './components/Footer';
import resumeData from './resumeData';


function App(){
    return (
        <div className="App">
            <Header resumeData={resumeData}/>
            <About resumeData={resumeData}/>
            <WorkWithMe resumeData={resumeData}/>
            <Portfolio resumeData={resumeData}/>
            <Awards resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
        </div>
    );
}

export default App;