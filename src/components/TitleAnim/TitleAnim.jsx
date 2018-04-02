import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import { title, name, work } from '../../../content';
import './TitleAnimStyles.less';

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
        <h2>
          <ReactRevealText show={this.state.showSubTitle}>{work}</ReactRevealText>
        </h2>
        <h1 className="title" >
          <ReactRevealText show={this.state.showBigTitle}>{title}</ReactRevealText>
        </h1>
        <h2>
          <ReactRevealText show={this.state.showSubTitle}>{name}</ReactRevealText>
        </h2>
      </div>
    );
  }
}

export default TitleAnim;
