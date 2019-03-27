import { combineReducers } from 'redux';
import blockReducer from './BlockReducer';
import todoReducer from './TodoReducer';
import calendarReducer from './CalendarReducer';

export default combineReducers({
  blocks: blockReducer,
  todos: todoReducer,
  calendar: calendarReducer
});