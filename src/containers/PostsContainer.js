import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostsActions from '../actions/Posts';

import BlogPage from 'components/containers/BlogPage';

const mapStateToProps = state => ({
  items: state.posts.entries,
  currentPageNumber: state.posts.currentPageNumber,
  totalItems: state.posts.totalItems,
  itemsPerPage: state.posts.itemsPerPage,
  totalPages: state.posts.totalPages,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);
