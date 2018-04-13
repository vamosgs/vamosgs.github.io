import React, { Component } from 'react';
import './ContactsStyles.less';
import Form from './Form';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      name: {
        value: '',
        error: '',
      },
      mail: {
        value: '',
        error: '',
      },
      message: {
        value: '',
        error: '',
      },
    };
  }
  validateEmail() {
    // eslint-disable-next-line no-useless-escape
    const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailReg.test(String(this.state.mail.value).toLowerCase());
  }
  validate() {
    const { name, mail, message } = this.state;
    return new Promise((resolve) => {
      if (!name.value) {
        this.setState({
          errors: [...this.state.errors, 'name'],
          name: { value: name.value, error: 'This field required' },
        });
      }
      if (!message.value) {
        this.setState({
          errors: [...this.state.errors, 'message'],
          message: { value: message.value, error: 'This field required' },
        });
      }
      if (mail.value) {
        const isEmail = this.validateEmail();
        if (!isEmail) {
          this.setState({
            errors: [...this.state.errors, 1],
            mail: { value: mail.value, error: 'Not valid Email!' },
          });
        }
      } else {
        this.setState({
          errors: [...this.state.errors, 1],
          mail: { value: '', error: 'Email required' },
        });
      }
      // if (!password.value) {
      //   this.setState({
      //     errors: [...this.state.errors, 'password'],
      //     password: { err: 'This field required' },
      //   });
      // }
      resolve();
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.validate().then(() => {
      const {
        errors, name, mail, message,
      } = this.state;
      if (errors.length === 0) {
        const data = {
          name: name.value,
          mail: mail.value,
          message: message.value,
        };
        console.log('SEND', data);
      }
    });
  };
  handleChange = prop => (e) => {
    const removedErr = this.state.errors;
    removedErr.pop();
    this.setState({ errors: removedErr, [prop]: { value: e.target.value, error: false } });
  };
  render() {
    const { name, mail, message } = this.state;
    return (
      <div className="Contact">
        <h2>Send me mail</h2>
        <Form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          data={{ name, message, mail }}
        />
      </div>
    );
  }
}

export default Contacts;
