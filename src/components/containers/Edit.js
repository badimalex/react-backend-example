import React from 'react';
import request from 'superagent';
const camelcaseKeys = require('camelcase-keys');
import _ from 'lodash';

import { API_ROOT } from 'constants/API';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import TextareaField from '../ui/form/TextareaField';
import InputField from '../ui/form/InputField';
import DateField from '../ui/form/DateField';

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
        component={InputField}
        type="text"
        name="title"
      />
      <Field
        label="Description"
        component={TextareaField}
        type="textarea"
        name="description"
      />
      <Field
        label="Author"
        component={InputField}
        type="text"
        name="author"
      />
      <Field
        label="Created at"
        component={DateField}
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
