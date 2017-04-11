import React from 'react';

import className from 'classnames';
import { set, assign } from 'lodash/object';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      false
    ));
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email':
          this.clearError('email');
          if (e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
          break;
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form', 'values', fieldName],
          e.target.value
        ));
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <h1>Contacts</h1>
        <form onSubmit={this.onSubmit} className="ui form">
          <Text
            name="fullName"
            label="Full name"
            value={fullName}
            onChange={this.handleChange('fullName')}
          />
          <Text
            name="email"
            label="Email"
            value={email}
            error={this.state.form.errors.email}
            onChange={this.handleChange('email')}
          />
          <TextArea
            name="message"
            label="Message"
            value={message}
            onChange={this.handleChange('message')}
          />
          <input type="submit" value="Submit" className="ui button primary" />
        </form>
      </div>
    );
  }
}

export default AboutPage;

const Text = ({ name, value, onChange, label, error }) => (
  <div className={className('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <input
      name={name}
      id={name}
      className="ui input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextArea = ({ name, value, onChange, label }) => (
  <div className="ui field">
    <label htmlFor={name}>{label}:</label>
    <textarea
      name={name}
      id={name}
      className="ui input"
      value={value}
      onChange={onChange}
    />
  </div>
);
