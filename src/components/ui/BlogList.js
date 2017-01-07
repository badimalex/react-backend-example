import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({posts}) => (
  React.createElement(
    "div", 
    { className: 'blog-list' }, 
    _.map(
      posts,
      (post, key) => (
        React.createElement( BlogItem, _.assign(post, {key}) )
      )
    )
  )
);

export default BlogList;
