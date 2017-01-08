import React, { PropTypes } from 'react';
import { CardImg } from 'reactstrap';

const Image = ({src, width, height, alt}) => (
  <CardImg top width={width} height={height} src={src} alt={alt} />
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: 'https://vk.com/images/camera_50.png',
  width: 50,
  height: 50,
  alt: 'No avatar'
};

export default Image;
