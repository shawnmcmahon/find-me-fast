import { combineReducers } from 'redux';
import routesReducer from './routes-reducer';
import stopsReducer from './stops-reducer'; 

const rootReducer = combineReducers({
  routesReducer, 
  stopsReducer
})

export default rootReducer;