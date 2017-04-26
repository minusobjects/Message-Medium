import {
  RECEIVE_ALL_FOLLOWINGS,
  RECEIVE_FOLLOWING } from '../actions/following_actions';

import merge from 'lodash/merge';

const FollowingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_FOLLOWINGS:
      return action.followings;
    case RECEIVE_FOLLOWING:
      return merge({}, state, {[action.following.id]: action.following});
    default:
      return state;
  }
};

export default FollowingsReducer;
