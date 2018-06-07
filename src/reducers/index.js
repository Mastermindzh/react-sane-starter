import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colorReducer from './color/color-reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  colorReducer
});

export default rootReducer;
