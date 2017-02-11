import React, { PropTypes } from 'react';
import _ from 'lodash';
import request from 'superagent';

import { Grid } from 'semantic-ui-react';

import BlogList from '../ui/BlogList';
import BlogItem from '../ui/BlogItem';
import PieChart from '../ui/PieChart';
import Pagination from '../widgets/Pagination';
import SearchForm from '../widgets/SearchForm';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.likeHandler = _.bind(this.likeHandler, this);
    this.pageChangeHandler = _.bind(this.pageChangeHandler, this);
    this.handleKeyDown = _.bind(this.handleKeyDown, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  pageChangeHandler(page) {
    this.setState({currentPageNumber: page});
    this.fetchPosts(page);
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      const value = event.currentTarget.value;
      request.get(
        'http://localhost:3001/posts',
        {'q[title_cont]': value},
        (err, res) => this.assignResponseAttributes(res)
      );
    }
  }

  assignResponseAttributes(response) {
    const { posts, meta } = response.body;
    this.setState({
      items: posts,
      currentPageNumber: meta.currentPageNumber,
      totalItems: meta.totalItems,
      itemsPerPage: meta.itemsPerPage,
      totalPages: meta.totalPages
    });
  }

  fetchPosts(page = 1) {
    request.get(
      'http://localhost:3001/posts',
      { page },
      (err, res) => this.assignResponseAttributes(res)
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
    const { items, currentPageNumber, totalPages } = this.state;

    if (!items) {
      return <div>Loading</div>;
    }

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <BlogList items={items} likeHandler={ this.likeHandler } />
            <Pagination
               totalItems={totalPages}
               currentPageNumber={currentPageNumber}
               pageChangeHandler={this.pageChangeHandler}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <SearchForm handleKeyDown={this.handleKeyDown} />
            <PieChart columns={this.getChartData()} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
};

export default BlogPage;
