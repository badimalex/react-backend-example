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

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export const likeEntry = id => ({
  type: types.ADD_POST_LIKE,
  id
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/posts`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) :  dispatch(receivePosts(response.body));
      });
  };
}
