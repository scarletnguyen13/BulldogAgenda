import { combineReducers } from 'redux';
import blockReducer from './BlockReducer';
import todoReducer from './TodoReducer';

export default combineReducers({
  blocks: blockReducer,
  todos: todoReducer
});