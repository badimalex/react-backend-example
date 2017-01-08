import React, { PropTypes } from 'react';
import moment from 'moment';

import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';

const BlogItem = ({item, likeHandler}) => (
  <div className='blog-item'>
    <Image {...item.image} />
    <TextBox>
      {
        item.text +
        ' by ' + item.meta.author +
        ' on ' + moment(item.meta.createdAt).format('L') +
        ' Updated ' + moment(item.meta.updatedAt).format('L')
      }
    </TextBox>
    <Like likes={item.meta.likes} likeHandler={ likeHandler } />
  </div>
);

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  text: PropTypes.string,
  meta: PropTypes.object
};

export default BlogItem;
