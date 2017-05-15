import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as PostActions from 'actions/Post';
import PostForm from 'components/views/posts/Create';
import { browserHistory } from 'react-router';
import formErrors from 'helpers/formErrors';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({
  enableReinitialize: true,
  form: 'createPost',
  onSubmit: (values, dispatch, props) => {
    const { addPost } = props.actions;
    return addPost(values)
      .then(() => {
        browserHistory.push('/');
      })
      .catch((data) => {
        formErrors(data.body);
      });
  }
})(PostForm));
