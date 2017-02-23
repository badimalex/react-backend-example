import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';

import BlogList from '../ui/BlogList';
import BlogItem from '../ui/BlogItem';
import PieChart from '../ui/PieChart';
import Pagination from '../widgets/Pagination';
import SearchForm from '../widgets/SearchForm';

const BlogPage = ({
  items, currentPageNumber, totalPages,
  pageChangeHandler, handleKeyDown, actions
}) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={12}>
        <BlogList items={items} likeHandler={actions.likeEntry} />
        <Pagination
           totalItems={totalPages}
           currentPageNumber={currentPageNumber}
           pageChangeHandler={pageChangeHandler}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <SearchForm handleKeyDown={handleKeyDown} />
        <PieChart items={items} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  currentPageNumber: PropTypes.number,
  totalPages: PropTypes.number,
  pageChangeHandler: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

export default BlogPage;
