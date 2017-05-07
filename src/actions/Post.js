import * as types from 'constants/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `posts/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}

export function addComment(item) {
  const { id } = item;
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}/comments`,
      method: 'POST',
      query: { comment: item },
      types: [
        types.POST_COMMENT_REQUEST,
        types.POST_COMMENT_SUCCESS,
        types.POST_COMMENT_ERROR
      ]
    }
  };
}
