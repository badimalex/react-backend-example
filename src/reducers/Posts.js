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

export default function(state = initialState, action) {
  switch (action.type) {
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
        {
          entries: action.response.posts,
          meta: action.response.meta,
          currentPageNumber: action.response.meta.currentPageNumber,
          totalItems: action.response.meta.totalItems,
          itemsPerPage: action.response.meta.itemsPerPage,
          totalPages: action.response.meta.totalPages
        }
      );
    default:
      return state;
  }
}
