import React from 'react';
import Loader from '../Loader';
import { stack } from '../../../content';
import './StackStyles.less';

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    if (!this.props.stackLoaded) {
      setTimeout(() => {
        this.setState({ loaded: true });
        this.props.load();
      }, 200);
    }
  }
  componentWillUnmount() {
    console.log('object');
  }
  render() {
    const { frontend, backend } = stack;
    return (
      <div className="Stack">
        <h2>Technologies that I use:</h2>
        {this.state.loaded ? (
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
        ) : (
          <div className="load">
            <Loader type="Puff" color="slategrey" height="50" width="50" />
          </div>
        )}
      </div>
    );
  }
}

export default Stack;
