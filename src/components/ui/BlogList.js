import React, { PropTypes } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({items, likeHandler}) => (
  <div className='blog-list'>
    {
      _.map(items, (item) =>
        <BlogItem key={item.id}
          item={item}
          likeHandler={ () => likeHandler(item.id) }
        />
      )
    }
  </div>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes))
};

export default BlogList;
