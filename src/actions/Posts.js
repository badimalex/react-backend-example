import * as types from 'constants/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchPosts(page) {
  return {
    [API_CALL]: {
      endpoint: 'posts/',
      method: 'GET',
      query: { page },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export function searchRequest(phrase) {
  const query = { 'q[title_cont]': phrase };
  return {
    [API_CALL]: {
      endpoint: 'posts/',
      method: 'GET',
      query,
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export function likeEntry(id) {
  return {
    [API_CALL]: {
      endpoint: `posts/${id}/like`,
      method: 'PATCH',
      query: {},
      types: [
        types.POST_LIKE_REQUEST,
        types.POST_LIKE_SUCCESS,
        types.POST_LIKE_ERROR
      ]
    }
  };
}
