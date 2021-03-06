import React from 'react';
import { Field } from 'redux-form';
import TextareaField from 'components/ui/form/TextareaField';
import InputField from 'components/ui/form/InputField';
import DateField from 'components/ui/form/DateField';
import DropzoneInput from 'components/ui/form/DropzoneInput';
const FILE_FIELD_NAME = 'files';

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
      <div style={{margin: '12px 0'}}>
        <label htmlFor={FILE_FIELD_NAME}>Files</label>
        <Field
          name={FILE_FIELD_NAME}
          component={DropzoneInput}
        />
      </div>
      {
        (!pristine && !submitting) &&
        <button className="ui button" onClick={reset}>Clear</button>
      }
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default EditPostView;
