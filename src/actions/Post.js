import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

import { pick, mapValues } from 'lodash/object';

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
      endpoint: `posts/${id}/comments`,
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
  const cleanItem = pick(item, ['title', 'description', 'author']);
  const files = mapValues(item.files, (image) => { return image; });

  return {
    [API_CALL]: {
      endpoint: 'posts',
      method: 'POST',
      query: { post: cleanItem },
      attachment: {
        key: 'files[]',
        files
      },
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
  const cleanItem = pick(item, ['title', 'description', 'author']);
  const files = mapValues(item.files, (image) => { return image; });

  return {
    [API_CALL]: {
      endpoint: `posts/${id}`,
      method: 'PUT',
      query: { post: cleanItem },
      attachment: {
        key: 'files[]',
        files
      },
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
