import React from 'react';
import { stack } from '../../../content';
import './StackStyles.less';
import './asstes';

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
        {/* <img alt="nice" src="assets/react.png" /> */}
        <h2>Technologies that I use:</h2>
        <div className="stack">
          <div className="tech front">
            <h3>Frontend:</h3>
            <ul>
              {frontend.map((item, i) => (
                <li key={i}>
                  {item.name}
                  <img alt="nice" src={`assets/${item.image}`} />
                  {/* {!(i === frontend.length - 1) && ','} */}
                </li>
              ))}
            </ul>
          </div>
          <div className="tech back">
            <h3>Backend:</h3>
            <ul>
              {backend.map((item, i) => (
                <li key={i}>
                  {item.name}
                  <img alt="nice" src={`assets/${item.image}`} />
                  {/* {!(i === backend.length - 1) && ','} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
