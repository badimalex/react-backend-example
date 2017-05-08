import { first } from 'lodash';
import { SubmissionError } from 'redux-form';

export default function(errors) {
  Object.keys(errors).forEach(function (field) {
    const e = {};
    e[field] = first(errors[field]);
    throw new SubmissionError(e);
  });
}
