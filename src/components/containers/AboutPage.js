import React from 'react';

import { mapValues, assign } from 'lodash/object';

import classNames from 'classnames';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: {} };
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const values = mapValues(this.form, 'value');

    this.setState({ errors: {} });

    if (!values.email || values.email.length < 3)
      this.setState(assign(
        {},
        this.state,
        { errors: assign({}, this.state.errors, { email: true }) }
      ));

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onSubmit}>
          <Text
            label="Full name"
            name="fullName"
            fieldRef={this.generateRef('fullName')}
          />
          <Text
            label="Email"
            name="email"
            error={this.state.errors.email}
            fieldRef={this.generateRef('email')}
          />
          <TextArea
            label="Message"
            name="message"
            fieldRef={this.generateRef('message')}
          />
          <input
            className="ui button primary"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default AboutPage;

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      <div className={classNames('ui field', { error })} >
        <label htmlFor={name}>{label}:</label>
        <input
          type="text"
          ref={fieldRef}
          className="ui input"
          name={name}
          id={name}
        />
      </div>
    );
  }
}

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      <div className="ui field" >
        <label htmlFor={name}>{label}:</label>
        <textarea
          ref={fieldRef}
          className="ui input"
          name={name}
          id={name}
        />
      </div>
    );
  }
}
