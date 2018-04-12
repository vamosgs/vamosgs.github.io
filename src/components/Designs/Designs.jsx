import React, { Component } from 'react';
import List from './List';
import './DesignsStyles.less';

class Designs extends Component {
  componentDidMount() {
    if (this.props.designs.length === 0) {
      this.props.fetchDesigns();
    }
  }
  render() {
    const { designs } = this.props;
    return (
      <div className="Designs">
        <h2>Some of my designs:</h2>
        <List iterable={designs} />
        {/* {designs.length !== 0 ? <List iterable={designs} /> : <h2>Loading...</h2>} */}
      </div>
    );
  }
}

export default Designs;
