import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        {/* <div className="twelve columns collapsed"> */}
          <h1 style={{}}>Check Out Some of My Works</h1>
          <div id="portfolio-wrapper">
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