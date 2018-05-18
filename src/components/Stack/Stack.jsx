import React from 'react';
import Loader from '../Loader';
import { frontend, backend } from '../../../stack';
import './StackStyles.less';

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 200);
  }
  render() {
    const { loaded } = this.state;
    return (
      <div className="Stack">
        <h2>Technologies that I use:</h2>
        {!loaded && (
          <div className="load">
            <Loader />
          </div>
        )}
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
