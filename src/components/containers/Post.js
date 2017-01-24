import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from '../ui/BlogItem';

import { items } from 'constants/static/items';

const Post = ({ params }) => (
  <Item.Group>
    <BlogItem {...items[params.id - 1]} />
  </Item.Group>
);

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
