import { combineReducers } from 'redux';
import blockReducer from './BlockReducer';

export default combineReducers({
  blocks: blockReducer,
});