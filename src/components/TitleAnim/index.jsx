import React, { Component, Fragment } from 'react';
import ReactRevealText from 'react-reveal-text';
import { title, name } from '../../../content';
import './styles.less';

class TitleAnim extends Component {
  constructor() {
    super();
    this.state = { showBigTitle: false, showSubTitle: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showBigTitle: true }, () => {
        setTimeout(() => {
          this.setState({ showSubTitle: true });
        }, 1200);
      });
    }, 500);
  }

  render() {
    return (
      <div className="Titles">
        <h1 className="title">
          <ReactRevealText show={this.state.showBigTitle}>{title}</ReactRevealText>
        </h1>
        <h1 className="title">
          <ReactRevealText show={this.state.showSubTitle}>{name}</ReactRevealText>
        </h1>
      </div>
    );
  }
}

export default TitleAnim;
