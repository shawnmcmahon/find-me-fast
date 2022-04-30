import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import routeReducer from './features/routes/routeSlice'; 

const rootReducer = combineReducers({
  routes: routeReducer
});

export const store = configureStore({
  reducer: rootReducer, 
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)
});

setupListeners(store.dispatch);