import React, { PropTypes } from 'react';
import _ from 'lodash';
import request from 'superagent';

import { Row, Col } from 'reactstrap';

import BlogList from '../ui/BlogList';
import BlogItem from '../ui/BlogItem';
import PieChart from '../ui/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.likeHandler = _.bind(this.likeHandler, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ items: res.body })
    );
  }

  likeHandler(id) {
    const { items } = this.state;
    const item = _.find(items, (o) => o.id == id);
    item.meta.likes += 1;
    this.setState({ items });
  }

  getChartData() {
    const { items } = this.state;
    return _.map(items, (i) => [i.title, i.meta.likes]);
  }

  render() {
    const { items } = this.state;
    return (
      <div className="blog-page">
        <Row>
          <Col>
            <BlogList items={items} likeHandler={ this.likeHandler } />
          </Col>
        </Row>
        <Row>
          <Col>
            <PieChart columns={this.getChartData()} />
          </Col>
        </Row>
      </div>
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
};

export default BlogPage;
