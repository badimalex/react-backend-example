import request from 'superagent';

import { assign, pick } from 'lodash/object';
import { each } from 'lodash/collection';

import { stringify } from 'qs';

import { API_ROOT } from 'constants/API';

function APICall({ endpoint, method, query, payload, attachment = false }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);

    if(attachment) {
      each(attachment.files, (obj) => {
        r.attach(attachment.key, obj);
      });
    }

    if(query)
      r.query(stringify(query));

    if(payload)
      r = r.send(payload);

    r.end((error, data) => (
      error ?
        reject(data)
      : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

export default store => next => action => {
  if(!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload', 'attachment'])
  );

  promise.then(
    (response) => next(
      nextAction(action, { response, type: successType })
    ),
    (error) => next(
      nextAction(action, { error, type: failureType })
    )
  );

  return promise;
};
