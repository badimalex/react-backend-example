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
        types.ADD_COMMENT_REQUEST,
        types.ADD_COMMENT_SUCCESS,
        types.ADD_COMMENT_ERROR
      ]
    }
  };
}

export function addPost(item) {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      method: 'POST',
      query: { post: item },
      types: [
        types.ADD_POST_REQUEST,
        types.ADD_POST_SUCCESS,
        types.ADD_POST_ERROR
      ]
    }
  };
}

export function updatePost(item) {
  const { id } = item;
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'PUT',
      query: { post: item },
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
