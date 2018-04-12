import React from 'react';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPackage from 'react-icons/lib/go/package';

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

export default List;
