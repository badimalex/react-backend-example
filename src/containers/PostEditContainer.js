import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as PostActions from 'actions/Post';
import { browserHistory } from 'react-router';
import EditPostView from 'components/views/Edit';
import formErrors from 'helpers/formErrors';

const stateToProps = (state) => ({
  initialValues: state.post.entry && {
    id: state.post.entry.id,
    title: state.post.entry.title,
    createdAt: state.post.entry.meta.createdAt,
    author: state.post.entry.meta.author,
    description: state.post.entry.description
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActions, dispatch)
});

export default connect(
  stateToProps,
  mapDispatchToProps
)(reduxForm({
  enableReinitialize: true,
  form: 'editPost',
  onSubmit: (values, dispatch, props) => {
    const { updatePost } = props.actions;
    return updatePost(values)
      .then((data) => {
        browserHistory.push(`/posts/${data.post.id}`);
      })
      .catch((data) => {
        formErrors(data.body);
      });
  }
})(EditPostView));
