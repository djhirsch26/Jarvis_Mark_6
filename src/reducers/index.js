import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import displayReducer from './displayReducer';

const rootReducer = combineReducers({
  input: inputReducer,
  display: displayReducer,
});

export default rootReducer;
