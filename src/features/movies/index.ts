import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie, MoviesResponse, Genre} from './interfaces';
import {
  getMovies,
  getMovieDetails,
  getMoviesSearch,
  getGenres,
  moviesDiscover,
} from './requests';

export interface MoviesState {
  moviesResponse: MoviesResponse;
  searchResponse: MoviesResponse | null;
  movieDetails: Movie | null;
  genres: Genre[];
  moviesDiscover: MoviesResponse | null;
  loading: boolean;
}

const initialState: MoviesState = {
  moviesResponse: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  searchResponse: null,
  movieDetails: null,
  genres: [],
  moviesDiscover: null,
  loading: false,
};

export const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.moviesResponse.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.moviesResponse.results = [
          ...state.moviesResponse.results,
          ...action.payload.results,
        ];
        state.moviesResponse.total_pages = action.payload.total_pages;
      },
    );
    builder.addCase(
      getMovieDetails.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.movieDetails = action.payload;
      },
    );
    builder.addCase(
      getMoviesSearch.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.searchResponse = action.payload;
      },
    );
    builder.addCase(
      getGenres.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.genres = action.payload;
      },
    );
    builder.addCase(
      moviesDiscover.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.moviesDiscover = action.payload;
      },
    );
  },
});

export const {setPage} = MoviesSlice.actions;

export default MoviesSlice;
