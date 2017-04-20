import { map, assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';
import { postsPath, editPostPath } from 'helpers/routes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentPageNumber: null,
  totalItems: null,
  itemsPerPage: null,
  totalPages: null,
};

const addLike = (entries, entry) => {
  const entriesClone = cloneDeep(entries);
  const { id, meta } = entry;

  entriesClone.find(item => item.id === id)
    .meta = meta;

  return entriesClone;
};

const getResponseAttributes = (response) => {
  const { posts, meta } = response;
  const newPosts = map(posts, post => {
    return assign({}, post, {
      postUrl: postsPath(post.id),
      editUrl: editPostPath(post.id)
    });
  });
  return {
    entries: newPosts,
    currentPageNumber: meta.current_page,
    totalItems: meta.total_count,
    itemsPerPage: meta.per_page,
    totalPages: meta.total_pages
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_POSTS_SUCCESS:
      return assign(
        {},
        initialState,
        getResponseAttributes(action.response)
      );
    case types.POST_LIKE_SUCCESS:
      return assign({}, state, {
        entries: addLike(state.entries, action.response.post)
      });
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign(
        {},
        initialState,
        getResponseAttributes(action.response)
      );
    default:
      return state;
  }
}
