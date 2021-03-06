import React from 'react';
import classNames from 'classnames';

const Field = (
  { children, label, meta: { touched, error, warning} }
) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    {children}
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    )))}
  </div>
);

export default Field;
