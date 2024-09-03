//Step two: Setting up the store to connect with reducer by importing configureStore and exporting default with reducer equal to hackerNewsReducer
import { configureStore } from '@reduxjs/toolkit';
import hackerNewsReducer from './reducers/hackerNewsReducer.js';
import mediumReducer from './reducers/mediumReducer.js';

export default configureStore({
  //To add more than one reducer, add them in the reducer object
  reducer: {
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
  },
});
