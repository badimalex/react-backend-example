import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import moment from 'moment';
import _ from 'lodash';
const camelcaseKeys = require('camelcase-keys');

import { API_ROOT } from 'constants/API';

import { Field, reduxForm, SubmissionError } from 'redux-form';

import classNames from 'classnames';

import DateRangePickerWrapper from '../ui/DateRangePickerWrapper';


class renderField extends React.Component {
  getField(input, type) {
    switch (type) {
      case 'date':
        return <DateRangePickerWrapper
          initialDate={input.value ? moment(input.value) : null}
          onDateChange={
            (date) => {
              input.onChange(moment(date).format('YYYY-MM-DD HH:mm:ss'));
            }
          } />;
      case 'textarea':
        return <textarea className="ui input" {...input} />;
      default:
        return <input className="ui input" type={type} {...input} />;
    }
  }

  render() {
    const { input, label, type, meta: { touched, error, warning} } = this.props;
    return (
      <div className={classNames('ui field', { error })}>
        <label>{label}</label>
        {
          this.getField(input, type)
        }
        {touched && (error && (
          <div className="ui red label">{error}</div>
        ) || (warning && (
          <div className="ui yellow label">{warning}</div>
        )))}
      </div>
    );
  }
}

const sendRequest = values => new Promise(function(resolve) {
  request
  .put(`${API_ROOT}posts/${values.id}`)
  .send({
    post: {
      title: values.title,
      description: values.description,
      author: values.author,
      created_at: values.createdAt
    }
  })
  .end(function(errors, res){
    if (errors || !res.ok) {
      resolve(
        camelcaseKeys(res.body)
      );
    }
  });
});

const submit = (values) => {
  return sendRequest(values).then((errors) => {
    Object.keys(errors).forEach(function (field) {
      const e = {};
      e[field] = _.first(errors[field]);
      throw new SubmissionError(e);
    });
  });
};

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit post</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field
        label="Title"
        component={renderField}
        type="text"
        name="title"
      />
      <Field
        label="Description"
        component={renderField}
        type="textarea"
        name="description"
      />
      <Field
        label="Author"
        component={renderField}
        type="text"
        name="author"
      />
      <Field
        label="Created at"
        component={renderField}
        type="date"
        name="createdAt"
      />
      {
        (!pristine && !submitting) &&
        <button className="ui button" onClick={reset}>Clear</button>
      }
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default connect(
  (state) => ({
    initialValues: {
      id: state.post.entry.id,
      title: state.post.entry.title,
      createdAt: state.post.entry.meta.createdAt,
      author: state.post.entry.meta.author,
      description: state.post.entry.description,
    }
  })
)(reduxForm({
  enableReinitialize: true,
  form: 'editPost',
  onSubmit: submit
})(EditPostView));
