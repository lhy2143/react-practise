import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todo';

export default combineReducers({ counter, todos });
