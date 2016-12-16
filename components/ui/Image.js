import React from 'react';

const Image = ({src, width, height, alt}) => (
  React.createElement(
    "img", { src, width, height, alt }
  )
);

export default Image;