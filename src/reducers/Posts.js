import { assign, map } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentPageNumber: null,
  totalItems: null,
  itemsPerPage: null,
  totalPages: null,
};

const addLike = (entries, action) => {
  entries = map(entries, function(entry) {
    if (entry.id == action.id) {
      entry.meta.likes += 1;
    }
    return entry;
  });
  return entries;
};

const getResponseAttributes = (response) => {
  const { posts, meta } = response;
  return {
    entries: posts,
    currentPageNumber: meta.currentPageNumber,
    totalItems: meta.totalItems,
    itemsPerPage: meta.itemsPerPage,
    totalPages: meta.totalPages
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
    case types.ADD_POST_LIKE:
      return assign({}, state, { entries: addLike(state.entries, action) });
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
