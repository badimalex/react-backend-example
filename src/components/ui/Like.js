import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({likes, likeHandler}) => (
  <div>
    <Button
      size='mini'
      color='blue'
      content='Like'
      icon='heart'
      onClick={likeHandler}
      label={{ basic: true, color: 'blue', pointing: 'left', content: likes }}
    />
  </div>
);

Like.propTypes = {
  likes: PropTypes.number,
  likeHandler: PropTypes.func
};

export default Like;
