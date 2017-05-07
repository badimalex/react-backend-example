import React, { PropTypes } from 'react';

import ItemFull from 'components/ui/ItemFull';

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
