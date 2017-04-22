import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import StoriesReducer from './stories_reducer';

export default combineReducers({
  session: SessionReducer,
  stories: StoriesReducer
});
