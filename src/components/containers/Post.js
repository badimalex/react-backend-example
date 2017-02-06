import React, { PropTypes } from 'react';
import request from 'superagent';

import { Item } from 'semantic-ui-react';

import BlogItem from '../ui/BlogItem';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: null };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const params = this.props.params;
    request.get(
      `http://localhost:3001/posts/${params.id}`,
      {},
      (err, res) => this.setState({ item: res.body })
    );
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return <div>Loading</div>;
    }

    return (
      <Item.Group>
        <BlogItem {...item} />
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
