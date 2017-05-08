import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CommentForm from 'components/widgets/blog/comment/Form';
import formErrors from 'helpers/formErrors';

const stateToProps = (state) => ({
  initialValues: state.post.entry && {
    id: state.post.entry.id,
  }
});

export default connect(
  stateToProps
)(reduxForm({
  enableReinitialize: true,
  form: 'commentForm',
  onSubmit: (values, dispatch, props) => {
    const { addCommentHandler, reset } = props;
    return addCommentHandler(values)
      .then(() => { reset(); })
      .catch((data) => {
        formErrors(data.body.errors);
      });
  }
})(CommentForm));
