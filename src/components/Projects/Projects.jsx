import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import List from './List';
import './ProjectsStyles.less';

class Projects extends Component {
  componentWillMount() {
    if (this.props.projects.length === 0) {
      this.props.fetchProjects();
    }
  }
  render() {
    const { projects } = this.props;
    return (
      <div className="Projects modul">
        <h2>My Projects from github:</h2>
        {projects.length !== 0 ? (
          <List iterable={projects} />
        ) : (
          <Loader type="Puff" color="slategrey" height="50" width="50" />
        )}
        <h3>
          <a
            href="https://github.com/VamOSGS?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            All Projects...
          </a>
        </h3>
      </div>
    );
  }
}

export default Projects;
