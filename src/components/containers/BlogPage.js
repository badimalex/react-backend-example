import React, { PropTypes } from 'react';
import _ from 'lodash';

import { items as staticItems } from 'constants/static/items';

import BlogList from '../ui/BlogList';
import BlogItem from '../ui/BlogItem';
import PieChart from '../ui/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: staticItems };
    this.likeHandler = _.bind(this.likeHandler, this);
  }

  likeHandler(id) {
    const { items } = this.state;
    let item = _.find(items, (o) => o.id == id );
    item.meta.likes += 1;
    this.setState({ items: items });
  }

  getChartData() {
    const { items } = this.state;
    return _.map(items, (i) => [i.text, i.meta.likes] );
  }

  render() {
    const { items } = this.state;
    return (
      <div className="blog-page">
        <BlogList items={items} likeHandler={ this.likeHandler } />
        <PieChart columns={this.getChartData()} />
      </div>
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes))
};

export default BlogPage;
