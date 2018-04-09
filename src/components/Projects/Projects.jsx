import React, { Component } from 'react';
import './ProjectsStyles.less';

class Projects extends Component {
  componentDidMount() {
    if (this.props.projects.length === 0) {
      this.props.fetchProjects();
    }
  }
  render() {
    const { projects } = this.props;
    return (
      <div className="Projects modul">
        <ul>
          {projects.map((project, key) => <li key={key}>{project.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Projects;
