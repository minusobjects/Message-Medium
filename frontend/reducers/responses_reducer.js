import {
  RECEIVE_ALL_RESPONSES,
  RECEIVE_RESPONSE } from '../actions/response_actions';

import merge from 'lodash/merge';

const ResponsesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_RESPONSES:
      return action.responses;
    case RECEIVE_RESPONSE:
      return merge({}, state, {[action.response.id]: action.response});
    default:
      return state;
  }
};

export default ResponsesReducer;
