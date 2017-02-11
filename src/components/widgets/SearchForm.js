import React, { PropTypes } from 'react';
import { Form } from 'semantic-ui-react';

const SearchForm = ({handleKeyDown}) => (
  <Form>
    <Form.Field>
      <input
        placeholder='Search'
        type="text"
        onKeyDown={handleKeyDown}
      />
    </Form.Field>
  </Form>
);

SearchForm.propTypes = {
  handleKeyPress: PropTypes.func
};

export default SearchForm;
