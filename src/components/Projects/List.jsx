import React from 'react';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

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

export default List;
