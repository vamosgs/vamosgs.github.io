import React, { Component } from 'react';
import './ProjectsStyles.less';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return <div className="Projects modul">{this.props.title} Component</div>;
  }
}

export default Projects;
