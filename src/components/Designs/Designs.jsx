import React, { Component } from 'react';
import links from '../../../links';
import Loader from '../Loader';
import List from './List';
import './DesignsStyles.less';

class Designs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    if (this.props.designs.length === 0) {
      this.props.fetchDesigns();
    }
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1400);
  }
  render() {
    const { designs } = this.props;
    const { loaded } = this.state;
    return (
      <div className="Designs">
        <h2>Some of my designs:</h2>
        <h3>
          See all in
          <a className="link" href={links.behance} rel="noopener noreferrer" target="_blank">
            Behance
          </a>
          or
          <a className="link" href={links.tumblr} rel="noopener noreferrer" target="_blank">
            Tumblr
          </a>
        </h3>
        {!loaded && (
          <div className="load">
            <Loader />
          </div>
        )}
        <List iterable={designs} />
      </div>
    );
  }
}

export default Designs;
