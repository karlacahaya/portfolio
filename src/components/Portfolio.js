import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        {/* <div className="twelve columns collapsed"> */}
          <div id="portfolio-wrapper">
          <h1>Project</h1>
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns col-lg-12 md-6 portfolio-item">
                  <div className="item-wrap">
                    {/* <a href="#modal-01"> */}
                    <row>
                      <img src={`${item.imgurl}`} className="item-img" alt=''/>
                    </row>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      {/* </div> */}
  </section>
        );
  }
}