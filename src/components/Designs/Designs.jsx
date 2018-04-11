import React, { Component } from 'react';
import './DesignsStyles.less';

class Designs extends Component {
  componentDidMount() {
    this.props.fetchTumblr();
    this.props.fetchBehance();
  }
  render() {
    console.log(this.props);
    const { behance, tumblr } = this.props;
    return (
      <div className="Designs">
        <ul>
          {tumblr.map((item, key) => (
            <li key={key}>
              <img src={item.photos[0].alt_sizes[4].url} alt={item.slug} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Designs;
