import React, { Component } from 'react';
import './ProjectsStyles.less';

const List = ({ iterable }) => (
  <ul>{iterable.map((project, key) => <li key={key}>{project.name}</li>)}</ul>
);

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
        <List iterable={projects} />
        {/* <ul>{projects.map((project, key) => <li key={key}>{project.name}</li>)}</ul> */}
      </div>
    );
  }
}

export default Projects;
