import { assign, cloneDeep } from 'lodash';

import { postsPath, editPostPath } from 'helpers/routes';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_ROOT } from 'constants/API';


const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

const commentAdd = (post, comment) => {
  const postClone = cloneDeep(post);

  postClone.comments.push(
    assign({}, comment, { user_avatar: API_ROOT + comment.user_avatar })
  );

  return postClone;
};

const getResponseAttributes = (post) => {
  return assign({}, post, {
    postUrl: postsPath(post.id),
    editUrl: editPostPath(post.id)
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.POST_COMMENT_SUCCESS:
      return assign({}, state, {
        entry: commentAdd(state.entry, action.response)
      });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign(
        {},
        initialState,
        { entry: getResponseAttributes(action.response.post) }
      );
    default:
      return state;
  }
}
