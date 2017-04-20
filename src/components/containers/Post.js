import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';

import Helmet from 'react-helmet';

const Post = ({ item }) => (
    <Item.Group>
      {item && <BlogItem {...item} />}
      {item && <Helmet title={item.title} /> }
    </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
