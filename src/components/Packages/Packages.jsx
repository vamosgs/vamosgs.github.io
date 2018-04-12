import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './PackagesStyles.less';
import List from './List';

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

        {packages.length !== 0 ? (
          <List iterable={packages} />
        ) : (
          <Loader type="Puff" color="slategrey" height="50" width="50" />
        )}
      </div>
    );
  }
}

export default Packages;
