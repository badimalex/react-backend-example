import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

const Like = ({likes, likeHandler}) => (
  <div>
    <Button outline color="success" onClick={likeHandler}>Like {likes}</Button>
  </div>
);

Like.propTypes = {
  likes: PropTypes.number,
  likeHandler: PropTypes.func
};

export default Like;
