import React, { Component } from 'react';
import './ProjectsStyles.less';

class Projects extends Component {
  render() {
    return <div className="Projects modul">{this.props.title} Component</div>;
  }
}

export default Projects;
