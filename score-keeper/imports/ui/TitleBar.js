import React from 'react';
import PropTypes from 'prop-types';

class TitleBar extends React.Component{

    renderSubtitle() {
      if(this.props.subtitle) {
        return <p className="title-bar__subtitle"><em>{this.props.subtitle}</em></p>
      } 
    }

    render() {
    
      return (
        <div className="title-bar">
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubtitle()}
          </div>
        </div>
      );
    }
  }

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}



export default TitleBar;