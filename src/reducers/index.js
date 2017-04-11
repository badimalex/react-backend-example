import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './Posts';
import post from './Post';

export default combineReducers({
  posts,
  post,
  form: formReducer
});
