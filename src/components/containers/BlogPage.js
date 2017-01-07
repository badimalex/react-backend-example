import React from 'react';


import BlogList from '../ui/BlogList';

const posts = [
  {
    "image": {
      "src": "https://facebook.github.io/react/img/logo.svg",
      "width": 36,
      "height": 36,
    },
    "text": "Post 1"
  },
  {
    "image": {
      "src": "https://facebook.github.io/react/img/logo.svg",
      "width": 36,
      "height": 36,
    },
    "text": "Post 2"
  },
  {
    "image": {
      "src": "https://facebook.github.io/react/img/logo.svg",
      "width": 36,
      "height": 36,
    },
    "text": "Post 3"
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

export default BlogPage;
