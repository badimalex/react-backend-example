import React from 'react';
import PropTypes from 'prop-types';

import { Item, Icon } from 'semantic-ui-react';
import moment from 'moment';

import CommentList from 'components/widgets/blog/comment/List';
import Like from 'components/ui/Like';
import Link from 'components/ui/Link';

const ItemFull = ({
  image, title, description, meta, comments,
  likeHandler, postUrl, editUrl, addCommentHandler
}) => (
  <Item>
    <Item.Image src={image.src} className="post-image" />
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
    <CommentList comments={comments} addCommentHandler={ addCommentHandler }  />
  </Item>
);

ItemFull.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  postUrl: PropTypes.string,
  editUrl: PropTypes.string,
  meta: PropTypes.object,
  comments: PropTypes.array,
  likeHandler: PropTypes.func,
  addCommentHandler: PropTypes.func,
};

export default ItemFull;
