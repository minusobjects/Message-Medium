import {
  RECEIVE_ALL_STORIES,
  RECEIVE_STORY,
  START_LOADING_ALL_STORIES,
  START_LOADING_SINGLE_STORY } from '../actions/story_actions';

import {
  START_LOADING_USER,
  RECEIVE_USER } from '../actions/user_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_STORIES:
    case RECEIVE_STORY:
    case RECEIVE_USER:
      return initialState;
    case START_LOADING_ALL_STORIES:
    case START_LOADING_USER:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_STORY:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};
