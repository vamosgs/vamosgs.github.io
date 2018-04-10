import React, { Component } from 'react';
import './PackagesStyles.less';

const List = ({ iterable }) => (
  <ul>{iterable.map((project, key) => <li key={key}>{project.name}</li>)}</ul>
);
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
        <List iterable={packages} />
      </div>
    );
  }
}

export default Packages;
