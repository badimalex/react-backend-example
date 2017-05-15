import React from 'react';
import { Field } from 'redux-form';
import TextareaField from 'components/ui/form/TextareaField';
import InputField from 'components/ui/form/InputField';
import DateField from 'components/ui/form/DateField';

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

export default EditPostView;
