import React from 'react';
import FormField from 'components/ui/form/Field';

const TextareaField = (props) => (
  <FormField { ...props }>
    <textarea className="ui input" {...props.input} />
  </FormField>
);

export default TextareaField;
