import { combinedReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import routeReducer from './featrues/routes/routeSlice'; 

const rootReducer = combinedReducers({
  routes: routeReducer
});

export const store = configureStore({
  reducer: rootReducer, 
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)
});

setupListeners(store.dispatch);