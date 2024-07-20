import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  apiGetMovies,
  apiGetMovieDetails,
  apiGetMoviesSearch,
  apiGetGenres,
  apiMoviesDiscover,
} from './api';
import {Genre, Movie, MoviesResponse} from './interfaces';

export const getMovies = createAsyncThunk<MoviesResponse, number>(
  'movies/getAllMovies',
  async page => {
    try {
      const {data} = await apiGetMovies(page);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);

export const getMovieDetails = createAsyncThunk<Movie, string>(
  'movies/movieDetails',
  async id => {
    try {
      const {data} = await apiGetMovieDetails(id);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);

export const getMoviesSearch = createAsyncThunk<MoviesResponse, string>(
  'movies/getMoviesSearch',
  async query => {
    try {
      const {data} = await apiGetMoviesSearch(query);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);

export const getGenres = createAsyncThunk<Genre[]>(
  'movies/getGenres',
  async () => {
    try {
      const {data} = await apiGetGenres();
      return data.genres;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);

export const moviesDiscover = createAsyncThunk<MoviesResponse, string>(
  'movies/moviesDiscover',
  async query => {
    try {
      const {data} = await apiMoviesDiscover(query);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);
