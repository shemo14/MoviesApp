import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from '../features/movies';
import trailersReducer from '../features/trailers';
import toastReducer from '../features/toast';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trailers: trailersReducer,
    toast: toastReducer,
  },
});
