import { combineReducers } from 'redux';
import { routesReducer, stopsReducer }  from './reducers';

export const rootReducer = combineReducers({
  routesReducer, 
  stopsReducer
})

