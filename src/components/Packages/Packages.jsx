import React, { Component } from 'react';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPackage from 'react-icons/lib/go/package';
import './PackagesStyles.less';

const List = ({ iterable }) => (
  <ul className="packagesList">
    {iterable.map((project, key) => (
      <li className="package" key={key}>
        <h3>
          {project.name} <span>v{project.version}</span>
        </h3>
        <p>{project.description}</p>
        <div>
          Find more in:
          <a className="link" href={project.links.npm} rel="noopener noreferrer" target="_blank">
            npm
            <GoPackage />
          </a>
          or
          <a
            className="link"
            href={project.links.repository}
            rel="noopener noreferrer"
            target="_blank"
          >
            github
            <GoMarkGithub />
          </a>
        </div>
      </li>
    ))}
  </ul>
);

class Packages extends Component {
  componentDidMount() {
    if (this.props.packages.length === 0) {
      this.props.fetchPackages();
    }
  }
  render() {
    const { packages } = this.props;
    return (
      <div className="Packages">
        <h2>Packages by me:</h2>
        {packages.length !== 0 ? <List iterable={packages} /> : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default Packages;
