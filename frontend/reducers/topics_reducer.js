import {
  RECEIVE_ALL_TOPICS} from '../actions/topic_actions';

import merge from 'lodash/merge';

const TopicsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_TOPICS:
      return action.topics;
    default:
      return state;
  }
};

export default TopicsReducer;
