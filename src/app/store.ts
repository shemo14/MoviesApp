import {configureStore} from '@reduxjs/toolkit';
import {MoviesSlice, MoviesState} from '../features/movies';
import {TrailersSlice, TrailersState} from '../features/trailers';
import toastReducer from '../features/toast';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    movies: MoviesSlice.reducer,
    trailers: TrailersSlice.reducer,
    toast: toastReducer,
  },
});

export function moviesState(state: RootState): MoviesState {
  return state[MoviesSlice.name];
}

export function trailerState(state: RootState): TrailersState {
  return state[TrailersSlice.name];
}
