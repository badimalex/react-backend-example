import request from 'superagent';

import { API_ROOT } from 'constants/API.js';
import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const searchPosts = (response) => ({
  type: types.SEARCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export const likeEntry = id => ({
  type: types.ADD_POST_LIKE,
  id
});

export function searchRequest(phrase) {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(
        `${API_ROOT}/posts`,
        {'q[title_cont]': phrase}
      )
      .end((err, response) => {
        err ? dispatch(errorPosts()) :  dispatch(searchPosts(response.body));
      });
  };
}

export function fetchPosts(page = 1) {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(
        `${API_ROOT}/posts`,
        { page }
      )
      .end((err, response) => {
        err ? dispatch(errorPosts()) :  dispatch(receivePosts(response.body));
      });
  };
}
