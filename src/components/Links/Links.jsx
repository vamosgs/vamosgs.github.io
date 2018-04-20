import React from 'react';

import './LinksStyles.less';
import links from './icons';

const Links = () => (
  <div className="Links">
    <h4>Find me on:</h4>
    <ul className="linkList">
      {links.map((social, key) => (
        <li key={key}>
          <a className="link" href={social.link} rel="noopener noreferrer" target="_blank">
            {social.render}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Links;
