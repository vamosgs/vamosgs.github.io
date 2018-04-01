import React, { Component, Fragment } from 'react';
import ReactRevealText from 'react-reveal-text';
import { title, name } from '../../../content';
import './styles.less';

class TitleAnim extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <h1 className="title">
          <ReactRevealText show={this.state.show}>{title}</ReactRevealText>
        </h1>
        <h1 className="title">
          <ReactRevealText show={this.state.show}>{name}</ReactRevealText>
        </h1>
      </Fragment>
    );
  }
}

export default TitleAnim;
