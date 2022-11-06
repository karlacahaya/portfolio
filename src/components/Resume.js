import React, { Component } from 'react';
// import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p style={{'textAlign': 'justify'}}>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p style={{'textAlign': 'justify'}}>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row education">
          <div className="three columns header-col">
            <h1><span>Volunteer</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.volunteer && resumeData.volunteer.map((item)=>{
                return(
                  <div className="row item">
                    <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfPassing}</em></p>
                        <p style={{'textAlign': 'justify'}}>
                        {item.Achievements}
                        </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div>
            
   				   <ul>
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`${item.skillname.toLowerCase()}`}>
                      </span><em style={{'fontSize': '20px'}}>{item.skillname}</em>
                      </li>
                    )
                  })
                }
   					</ul>
   				</div>
   			</div>
         <hr />
         </div>
      </section>
    );
  }
}