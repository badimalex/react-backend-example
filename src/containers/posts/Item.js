import { connect } from 'react-redux';
import Post from 'components/views/posts/Item';
import { bindActionCreators } from 'redux';
import * as PostActions from 'actions/Post';

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActions, dispatch)
});

export default connect(
  stateToProps,
  mapDispatchToProps
)(Post);
