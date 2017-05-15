import React from 'react';
import { map } from 'lodash';
import { Comment, Header } from 'semantic-ui-react';
import CommentForm from 'containers/comments/Create';
import formatDate from 'helpers/formatDate';

const CommentExampleComment = ({ comments, addCommentHandler }) => (
  <Comment.Group>
    <Header as='h3' dividing>Comments</Header>
    {
      map(comments, (comment) =>
      <Comment key={comment.id}>
        <Comment.Avatar src={comment.user_avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.user_name}</Comment.Author>
          <Comment.Metadata>
            <div>{formatDate(comment.created_at)}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
        </Comment.Content>
      </Comment>
      )
    }
    <br />
    <CommentForm addCommentHandler={ addCommentHandler }   />
  </Comment.Group>
);

export default CommentExampleComment;
