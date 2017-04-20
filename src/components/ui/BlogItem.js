import React, { PropTypes } from 'react';
import { Item, Icon } from 'semantic-ui-react';
import moment from 'moment';

import Like from './Like';
import Link from './Link';

const BlogItem = ({
  image, title, description, meta, likeHandler, postUrl, editUrl
}) => (
  <Item>
    <Item.Image src={image.src} />
    <Item.Content>
      <Item.Header>
        <Link to={postUrl} >{title}</Link>
        &nbsp;
        <Link to={editUrl} >
          <Icon name='edit' />
        </Link>

      </Item.Header>
      <Item.Description> { description } </Item.Description>
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
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  postUrl: PropTypes.string,
  editUrl: PropTypes.string,
  meta: PropTypes.object,
  likeHandler: PropTypes.func
};

export default BlogItem;
