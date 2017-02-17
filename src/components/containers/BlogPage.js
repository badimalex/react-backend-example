import React, { PropTypes } from 'react';
import _ from 'lodash';

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
    this.pageChangeHandler = _.bind(this.pageChangeHandler, this);
    this.handleKeyDown = _.bind(this.handleKeyDown, this);
  }

  pageChangeHandler(page) {
    const { fetchPosts } = this.props.actions;
    fetchPosts(page);
  }

  handleKeyDown(event) {
    const { searchRequest } = this.props.actions;
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      const phrase = event.currentTarget.value;
      searchRequest(phrase);
    }
  }

  getChartData() {
    const { items } = this.props;
    return _.map(items, (i) => [i.title, i.meta.likes]);
  }

  render() {
    const { items, currentPageNumber, totalPages } = this.props;
    const { likeEntry } = this.props.actions;

    if (!items) {
      return <div>Loading</div>;
    }

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <BlogList items={items} likeHandler={likeEntry} />
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
  currentPageNumber: PropTypes.number,
  totalPages: PropTypes.number,
  actions: PropTypes.object.isRequired
};

export default BlogPage;
