import React, { Component, Fragment } from 'react';
import Loader from '../Loader';
import './ContactsStyles.less';
import Form from './Form';
import { fetchApi } from '../../utlis';

const initalState = {
  errors: [],
  mailStatus: {
    sent: false,
    success: false,
    sending: false,
  },
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

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = initalState;
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
      resolve();
    });
  }
  sendMail(body) {
    this.setState({ mailStatus: { sending: true } });
    fetchApi(url, {
      method: 'POST',
      headers: { Authorization: authorization },
      body,
    }).then(({ success }) =>
      this.setState({ mailStatus: { sending: false, sent: true, success } }));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.validate().then(() => {
      const {
        errors, name, mail, message,
      } = this.state;
      if (errors.length === 0) {
        const body = JSON.stringify({
          name: name.value,
          mail: mail.value,
          message: message.value,
        });
        this.sendMail(body);
      }
    });
  };
  handleChange = prop => (e) => {
    const removedErr = this.state.errors;
    removedErr.pop();
    this.setState({ errors: removedErr, [prop]: { value: e.target.value, error: false } });
  };
  restore = () => {
    this.setState(initalState);
  };
  render() {
    const {
      name, mail, message, mailStatus,
    } = this.state;
    return (
      <div className="Contact">
        {mailStatus.sending && <Loader />}
        {mailStatus.sent ? (
          <Fragment>
            <h2>
              {mailStatus.success
                ? 'Mail successfully sent'
                : 'Sorry, somthing went wrong..(( Contact me with mail gegham.samvelyan@hotmail.com'}
            </h2>
            <button onClick={this.restore}>go back</button>
          </Fragment>
        ) : (
          <Fragment>
            {mailStatus.sending && <div className="disableForm" />}
            <h2>Send me mail</h2>
            <Form
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              data={{
                name,
                message,
                mail,
              }}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Contacts;
