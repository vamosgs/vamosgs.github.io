import React, { Component } from 'react';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import './ProjectsStyles.less';

const List = ({ iterable }) => (
  <ul className="projectList">
    {iterable.map((project, key) => (
      <li className="project" key={key}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.html_url} rel="noopener noreferrer" target="_blank">
          open <GoMarkGithub />
        </a>
      </li>
    ))}
  </ul>
);

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
        {projects.length !== 0 ? <List iterable={projects} /> : <h2>Loading...</h2>}
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
