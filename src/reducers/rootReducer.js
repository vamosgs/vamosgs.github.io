import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  dataReducer,
  mainReducer,
});

export default rootReducer;
