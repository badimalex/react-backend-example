import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import classNames from 'classnames';


const renderField = (
  { input, label, type, meta: { touched, error, warning} }
) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    {
      (type == 'textarea') ?
      <textarea
        className="ui input"
        {...input}
      />
      :
      <input
        className="ui input"
        type={type}
        {...input}
      />
    }

    {touched && (error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    )))}
  </div>
);

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => {
  return sleep(1000).then(() => {
    if (values.title.length < 5)
      throw new SubmissionError({
        title: 'Рекомендуемая длина заголовка должна быть больше 5'
      });
    else {
      alert(JSON.stringify(values));
    }
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
        type="text"
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
