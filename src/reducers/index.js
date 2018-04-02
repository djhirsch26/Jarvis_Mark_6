import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import displayReducer from './displayReducer';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
  input: inputReducer,
  display: displayReducer,
  file: fileReducer,
});

export default rootReducer;
