import { combineReducers } from 'redux';
import blockReducer from './BlockReducer';
import todoReducer from './TodoReducer';
import notificationReducer from './NotificationReducer';

export default combineReducers({
  blocks: blockReducer,
  todos: todoReducer,
  notifications: notificationReducer
});