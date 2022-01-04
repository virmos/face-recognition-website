import React from 'react'
import services from './FrontendServices';

import createReactClass from 'create-react-class'

const Student = createReactClass({
  componentDidMount: function () {
    services.addAnimation()
  },

  render: function () {
    return (
      <div className="col-lg-3 fadeInUpWrapper">
          <div className="animatedFadeInUp fadeInUp">
            <div className="resume-item">
              <div className="card" id={this.props.id}> 
                  <img src={this.props.img} alt="Avatar"/>
                  <div className="text-center card-container">
                      <em> {this.props.name} </em>
                  </div> 
              </div>
            </div>
          </div>
      </div>
      )
  }
});
export default Student