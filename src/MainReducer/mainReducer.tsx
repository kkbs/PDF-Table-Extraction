import { combineReducers } from 'redux';
import fileReducer from '../HelloWorld/Reducer/fileReducer';

export const mainReducer = combineReducers({
  File: fileReducer
  });