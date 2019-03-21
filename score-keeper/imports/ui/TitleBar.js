import React from 'react';
import PropTypes from 'prop-types';

class TitleBar extends React.Component{

    renderSubtitle() {
      if(this.props.subtitle) {
        return <p><em>{this.props.subtitle}</em></p>
      } 
    }

    render() {
    
      return (
        <div>
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      );
    }
  }

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}



export default TitleBar;