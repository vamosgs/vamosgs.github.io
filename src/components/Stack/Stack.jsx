import React from 'react';
import { stack } from '../../../content';
import './StackStyles.less';

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }
  render() {
    const { frontend, backend } = stack;
    return (
      <div className="Stack">
        <h2>Technologies that I use:</h2>
        <div className="tech front">
          <h3>Frontend:</h3>
          <ul>
            {frontend.map((item, i) => (
              <li key={i}>
                {item}
                {!(i === frontend.length - 1) && ','}
              </li>
            ))}
          </ul>
        </div>
        <div className="tech back">
          <h3>Backend:</h3>
          <ul>
            {backend.map((item, i) => (
              <li key={i}>
                {item}
                {!(i === backend.length - 1) && ','}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stack;
