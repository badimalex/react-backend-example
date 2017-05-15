import React from 'react';
import PropTypes from 'prop-types';

import ItemFull from 'components/widgets/blog/ItemFull';

import Helmet from 'react-helmet';

import { Grid } from 'semantic-ui-react';

const Post = ({ item, actions }) => (
  <Grid>
  <Grid.Row columns={1}>
      <Grid.Column>
        {item && <ItemFull {...item}  addCommentHandler={actions.addComment} />}
        {item && <Helmet title={item.title} /> }
        </Grid.Column>
    </Grid.Row>
  </Grid>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
