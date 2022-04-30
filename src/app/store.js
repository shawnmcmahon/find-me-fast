import { combinedReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';

const rootReducer = combinedReducers({
  // routes: routesReducer
});

export const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)
});

setupListeners(store.dispatch);