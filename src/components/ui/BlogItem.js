import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import moment from 'moment';

import Image from './Image';
import Like from './Like';
import Link from './Link';
import { postsPath } from 'helpers/routes';

const BlogItem = ({id, image, title, desc, meta, likeHandler}) => (
  <Item>
    <Image {...image} />
    <Item.Content>
      <Item.Header>
        <Link to={postsPath(id)} >{title}</Link>
      </Item.Header>
      <Item.Description> { desc } </Item.Description>
      <Item.Meta>
        {
          `by ${meta.author},
          on ${moment(meta.createdAt).format('L')},
          updated ${moment(meta.updatedAt).format('L')}`
        }
      </Item.Meta>
      <Like likes={meta.likes} likeHandler={ likeHandler } />
    </Item.Content>
  </Item>
);

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  title: PropTypes.string,
  desc: PropTypes.string,
  meta: PropTypes.object,
  likeHandler: PropTypes.func
};

export default BlogItem;
