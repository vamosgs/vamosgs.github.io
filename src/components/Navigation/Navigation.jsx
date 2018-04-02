import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from './links';
import './NavigationStyles.less';

const Li = ({ link, name }) => (
  <li>
    <Link to={`/${link}`} href={`/${link}`}>
      {name}
    </Link>
  </li>
);

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      /* eslint-disable-next-line */
      linksRender: links,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true });
    }, 2100);
  }
  render() {
    const { linksRender } = this.state;
    const pathCheck = window.location.pathname === '/';
    return (
      <ul className={`nav ${this.state.open && 'open'}`}>
        {linksRender.map((options, i) => <Li key={i} name={options.name} link={options.link} />)}
        {!pathCheck && (
          <li className="close">
            <Link to="/" href="/">
              close (x)
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default Navigation;
