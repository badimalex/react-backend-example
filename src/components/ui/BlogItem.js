import React, { PropTypes } from 'react';
import { Card, CardBlock,
        CardTitle, CardText } from 'reactstrap';

import moment from 'moment';

import Image from './Image';
import Like from './Like';

const BlogItem = ({image, title, desc, meta, likeHandler}) => (
  <Card className='blog-item'>
    <Image {...image} />
    <CardBlock>
      <CardTitle> { title } </CardTitle>
      <CardText> { desc } </CardText>
      <CardText>
        <small className="text-muted">
          {
            `by ${meta.author},
            on ${moment(meta.createdAt).format('L')},
            updated ${moment(meta.updatedAt).format('L')}`
          }
        </small>
      </CardText>
      <Like likes={meta.likes} likeHandler={ likeHandler } />
    </CardBlock>
  </Card>
);

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  title: PropTypes.string,
  desc: PropTypes.string,
  meta: PropTypes.object,
  likeHandler: PropTypes.func
};

export default BlogItem;
