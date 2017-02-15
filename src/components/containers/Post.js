import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from '../ui/BlogItem';

const Post = ({ item }) => (
    <Item.Group>
      {item && <BlogItem {...item} />}
    </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
