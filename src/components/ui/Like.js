import React, { PropTypes } from 'react';

const Like = ({likes, likeHandler}) => (
  <div>
    <span>Likes: {likes}</span>
    <button onClick={likeHandler}>+</button>
  </div>
);

Like.propTypes = {
  count: PropTypes.number
};

export default Like;
