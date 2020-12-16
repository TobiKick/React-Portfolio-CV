import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import nl2br from 'react-newline-to-break';


export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <IconContext.Provider value={{ color: "#333333", size: "1.25em", style: { float: 'right'} }}>
         <Accordion className="react-sanfona">

             <AccordionItem className="row work react-sanfona-item" title={<h3 id="react-sanfona-item-title" className="react-sanfona-item-title" style={{cursor: "pointer"}}>Professional Experience<IoIosArrowDropdownCircle /></h3>}>
                 <br /><div className="react-sanfona-item-body">
                    <div className="two columns header-col"></div>
                    <div className="ten columns main-col">
                       {
                         resumeData.work && resumeData.work.map((item) => {
                           return(
                             <div className="row item" key={item.id}>
                                <div className="twelve columns">
                                   <h3>{item.CompanyName}</h3>
                                   <p className="info">
                                   {item.specialization}
                                   <span>&bull;</span> <em className="date">{item.MonthStart} {item.YearStart} - {item.MonthEnd} {item.YearEnd}</em></p>
                                   <p style={{marginLeft: '30px'}}>
                                        {nl2br(item.Achievements)}
                                   </p>
                                </div>

                             </div>

                           )
                         })
                       }
                     </div>
                  </div>
             </AccordionItem>

             <AccordionItem className="row education react-sanfona-item" title={<h3 id="react-sanfona-item-title" className="react-sanfona-item-title" style={{cursor: "pointer"}}>Education<IoIosArrowDropdownCircle /></h3>}>
                 <br /><div className="react-sanfona-item-body">
                    <div className="two columns header-col"></div>
                    <div className="ten columns main-col">
                      {
                        resumeData.education && resumeData.education.map((item)=>{
                          return(
                            <div className="row item" key={item.UniversityName}>
                               <div className="twelve columns">
                                  <h3>{item.UniversityName}</h3>
                                  <p className="info">
                                  {item.specialization}
                                  <span>&bull;</span> <em className="date">{item.MonthStart} {item.YearStart} - {item.MonthEnd} {item.YearEnd}</em></p>
                                  <p>
                                  {item.Achievements}
                                  </p>
                               </div>
                            </div>
                          )
                        })
                      }
                    </div>
                 </div>
             </AccordionItem>

             <AccordionItem className="row skill react-sanfona-item" title={<h3 id="react-sanfona-item-title" className="react-sanfona-item-title" style={{cursor: "pointer"}}>Skills<IoIosArrowDropdownCircle /></h3>}>
                 <br /><div className="react-sanfona-item-body">
                    <div className="two columns header-col"></div>
                    <div className="ten columns main-col">
                       <p>
                       {resumeData.skillsDescription}
                       </p>
                        <div className="bars">
                           <ul className="skills">
                        {
                          resumeData.skills && resumeData.skills.map((item) => {
                            return(
                              <li key={item.skillname}>
                              <span className={`bar-expand ${item.skillname.toLowerCase()}`} style={{paddingRight: item.skilllevel}}>
                              </span><em>{item.skillname}</em>
                              </li>
                            )
                          })
                        }
                            </ul>
                        </div>
                    </div>
                 </div>
              </AccordionItem>
         </Accordion>
         </IconContext.Provider>
      </section>
    );
  }
}