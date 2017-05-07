import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';

import BlogList from 'components/ui/BlogList';
import BlogItem from 'components/ui/BlogItem';
import PieChart from 'components/widgets/PieChart';
import Pagination from 'components/widgets/Pagination';
import SearchForm from 'components/widgets/SearchForm';
import Helmet from 'react-helmet';

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
    <Helmet title='Posts list'
      meta={[
        { name: 'description', content: 'React application' },
        { name: 'keywords', content: 'thinknetica, react' },
      ]}
    />
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
