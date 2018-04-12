import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import loadReducer from './loadReducer';

const rootReducer = combineReducers({
  loadReducer,
  mainReducer,
});

export default rootReducer;
