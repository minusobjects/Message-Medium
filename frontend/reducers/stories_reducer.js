import {
  RECEIVE_ALL_STORIES,
  RECEIVE_STORY } from '../actions/story_actions';

import merge from 'lodash/merge';

const StoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories;
    case RECEIVE_STORY:
      return merge({}, state, {[action.story.id]: action.story});
    default:
      return state;
  }
};

export default StoriesReducer;
