import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostsActions from '../actions/Posts';
import { browserHistory } from 'react-router';

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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    pageChangeHandler: (page) => {
      browserHistory.push(`/page/${page}`);
    },
    handleKeyDown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        event.stopPropagation();
        const phrase = event.currentTarget.value;
        browserHistory.push(`/search?q=${phrase}`);
      }
    },
    ...dispatchProps,
    ...stateProps
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BlogPage);
