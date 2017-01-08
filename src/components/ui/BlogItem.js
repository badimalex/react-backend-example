import React, { PropTypes } from 'react';
import { Card, CardBlock,
        CardTitle, CardText } from 'reactstrap';

import moment from 'moment';

import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';

const BlogItem = ({item, likeHandler}) => (
  <Card className='blog-item'>
    <Image {...item.image} />
    <CardBlock>
      <CardTitle> { item.title } </CardTitle>
      <TextBox> { item.desc } </TextBox>
      <CardText>
        <small className="text-muted">
          {
            'by ' + item.meta.author +
            ', on ' + moment(item.meta.createdAt).format('L') +
            ', updated ' + moment(item.meta.updatedAt).format('L')
          }
        </small>
      </CardText>
      <Like likes={item.meta.likes} likeHandler={ likeHandler } />
    </CardBlock>
  </Card>
);

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  title: PropTypes.string,
  desc: PropTypes.string,
  meta: PropTypes.object
};

export default BlogItem;
