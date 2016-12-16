import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

class BlogItem extends React.Component {
   render() {
    return (
      React.createElement(
        "div",
        { className: 'blog-item' },
        React.createElement(
          Image,
          this.props.image
        ),
        React.createElement(
          TextBox, { text: this.props.text }
        )
      )
    );
  }
}

export default BlogItem;