import React from 'react';
import classNames from 'classnames';
import DateRangePickerWrapper from 'components/ui/DateRangePickerWrapper';
import formatDate from 'helpers/formatDate';

const InputField = (
  { input, label, type, meta: { touched, error, warning} }
) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    <DateRangePickerWrapper
      initialDate={input.value}
      onDateChange={
        (date) => {
          input.onChange(formatDate(date));
        }
      } />
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    )))}
  </div>
);

export default InputField;
