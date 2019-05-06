import { combineReducers } from 'redux';
import stateReducer from './state_reducer';

const rootReducer = combineReducers({
  state: stateReducer,
});

export default rootReducer;
