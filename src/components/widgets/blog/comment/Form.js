import React from 'react';
import { Button } from 'semantic-ui-react';
import { Field } from 'redux-form';
import TextareaField from 'components/ui/form/TextareaField';
import InputField from 'components/ui/form/InputField';

const CommentForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <form
      onSubmit={handleSubmit}
      className="ui form"
    >
      <Field
        label="Author"
        component={InputField}
        type="text"
        name="user_name"
      />
      <Field
        label="Text"
        component={TextareaField}
        type="textarea"
        name="text"
      />
      {
        (!pristine && !submitting) &&
        <button className="ui button" onClick={reset}>Clear</button>
      }
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </form>
  </div>
);

export default CommentForm;
