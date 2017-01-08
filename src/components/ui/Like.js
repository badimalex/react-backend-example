import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

const Like = ({likes, likeHandler}) => (
  <div>
    <Button outline color="success" onClick={likeHandler}>Like {likes}</Button>
  </div>
);

Like.propTypes = {
  count: PropTypes.number
};

export default Like;
