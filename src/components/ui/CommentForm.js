import React from 'react';
import { get, first } from 'lodash';
import { Button } from 'semantic-ui-react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import TextareaField from 'components/ui/form/TextareaField';
import InputField from 'components/ui/form/InputField';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
  handleSubmit(values) {
    const { addCommentHandler, reset } = this.props;
    return addCommentHandler(values)
    .then(()=>{ reset(); })
    .catch((data) => {
      const errors = get(data, 'body.errors');
      Object.keys(errors).forEach(function (field) {
        const e = {};
        e[field] = first(errors[field]);
        throw new SubmissionError(e);
      });
    });
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <div>
        <form
          onSubmit={handleSubmit((values) => this.handleSubmit(values))}
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
  }
}

export default connect(
  (state) => ({
    initialValues: {
      id: get(state, 'post.entry.id'),
    }
  })
)(reduxForm({
  enableReinitialize: true,
  form: 'commentForm'
})(CommentForm));
