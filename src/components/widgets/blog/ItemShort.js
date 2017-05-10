import React from 'react';
import PropTypes from 'prop-types';

import { Item, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { get } from 'lodash';
import Like from 'components/ui/Like';
import Link from 'components/ui/Link';

const BlogItem = ({
  image, title, description, meta, likeHandler, postUrl, editUrl
}) => (
  <Item>
    <Item.Image {...image} />
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
          `by ${get(meta, 'author')},
          on ${moment(get(meta,'createdAt')).format('L')},
          updated ${moment(get(meta,'updatedAt')).format('L')}`
        }
      </Item.Meta>
      <Like likes={get(meta,'likes')} likeHandler={ likeHandler } />
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
