import SessionReducer from './sessions_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer
});
