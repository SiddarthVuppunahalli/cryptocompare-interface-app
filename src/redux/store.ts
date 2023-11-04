import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookmarksReducer from './bookmarksSlice';

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;