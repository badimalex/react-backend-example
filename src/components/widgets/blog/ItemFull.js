import React from 'react';
import PropTypes from 'prop-types';

import { Item, List, Icon, Header, Divider, Image, Container, Segment, Button } from 'semantic-ui-react';
import moment from 'moment';

import CommentList from 'components/widgets/blog/comment/List';
import Like from 'components/ui/Like';
import Link from 'components/ui/Link';
import FilesTree from 'components/widgets/FilesTree';

const ItemFull = ({
  image, title, description, meta, comments,
  likeHandler, postUrl, editUrl, addCommentHandler, files
}) => (
  <Container text>
    <Item.Content>
      <Image centered src={image.src} className="post-image" size='medium' />
      <Header as='h2'>{title}</Header>
      <Item.Description>{ description }</Item.Description>
      { files.length ?  <Divider hidden /> && <p>Attached files:</p> : '' }
      <FilesTree files={files} />
      <Divider />
      <Item.Extra>
        <List horizontal>
          <List.Item>
            <Like likes={meta.likes} likeHandler={ likeHandler } />
          </List.Item>
          <List.Item>
            <Link to={editUrl} >
              Edit <Icon name='edit' />
            </Link>
          </List.Item>
          <List.Item>
            {
              `by ${meta.author},
              on ${moment(meta.createdAt).format('L')},
              updated ${moment(meta.updatedAt).format('L')}`
            }
          </List.Item>
        </List>
      </Item.Extra>
      <CommentList comments={comments} addCommentHandler={ addCommentHandler }  />
    </Item.Content>
  </Container>
);
// <Item.Header as='h2'> {title} </Item.Header>

// <Item.Image src={image.src} className="post-image" size='medium' />
//
// <Link to={editUrl} >
//   <Icon name='edit' />
// <Item.Description> { description } </Item.Description>
// </Link>
// <Item>
//
//   <Item.Content>
    // <Like likes={meta.likes} likeHandler={ likeHandler } />
//   </Item.Content>
// </Item>
// <CommentList comments={comments} addCommentHandler={ addCommentHandler }  />
ItemFull.propTypes = {
  image: PropTypes.object,
  files: PropTypes.array,
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
