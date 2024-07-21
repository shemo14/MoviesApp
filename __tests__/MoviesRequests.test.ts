import {configureStore} from '@reduxjs/toolkit';
import moviesReducer, {MoviesState} from '../src/features/movies';
import {
  getMovies,
  getMovieDetails,
  getMoviesSearch,
  getGenres,
  moviesDiscover,
} from '../src/features/movies/requests';
import {
  apiGetMovies,
  apiGetMovieDetails,
  apiGetMoviesSearch,
  apiGetGenres,
  apiMoviesDiscover,
} from '../src/features/movies/api';

jest.mock('../src/features/movies/api', () => ({
  apiGetMovies: jest.fn(),
  apiGetMovieDetails: jest.fn(),
  apiGetMoviesSearch: jest.fn(),
  apiGetGenres: jest.fn(),
  apiMoviesDiscover: jest.fn(),
}));
describe('Redux Thunks', () => {
  let store;
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

  beforeEach(() => {
    store = configureStore({
      reducer: {
        movies: moviesReducer,
      },
      preloadedState: {movies: initialState},
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getMovies thunk should return data on success', async () => {
    const mockData = {
      results: [{id: 1, title: 'Test Movie'}],
      page: 1,
      total_pages: 1,
      total_results: 1,
    };
    (apiGetMovies as jest.Mock).mockResolvedValueOnce({data: mockData});

    await store.dispatch(getMovies(1));

    const state = store.getState().movies;
    expect(state.moviesResponse.results).toEqual(mockData.results);
    expect(state.moviesResponse.total_pages).toEqual(mockData.total_pages);
    expect(state.loading).toBe(false);
  });

  it('getMovieDetails thunk should return data on success', async () => {
    const mockData = {id: '1', title: 'Movie Title'};
    (apiGetMovieDetails as jest.Mock).mockResolvedValueOnce({data: mockData});

    await store.dispatch(getMovieDetails('1'));

    const state = store.getState().movies;
    expect(state.movieDetails).toEqual(mockData);
  });

  it('getMoviesSearch thunk should return data on success', async () => {
    const mockData = {
      results: [{id: 1, title: 'Test Movie'}],
      page: 1,
      total_pages: 1,
      total_results: 1,
    };
    (apiGetMoviesSearch as jest.Mock).mockResolvedValueOnce({data: mockData});

    await store.dispatch(getMoviesSearch('query'));

    const state = store.getState().movies;
    expect(state.searchResponse).toEqual(mockData);
  });

  it('getGenres thunk should return data on success', async () => {
    const mockData = {genres: [{id: 1, name: 'Action'}]};
    (apiGetGenres as jest.Mock).mockResolvedValueOnce({data: mockData});

    await store.dispatch(getGenres());

    const state = store.getState().movies;
    expect(state.genres).toEqual(mockData.genres);
  });

  it('moviesDiscover thunk should return data on success', async () => {
    const mockData = {
      results: [{id: 1, title: 'Discovered Movie'}],
      page: 1,
      total_pages: 1,
      total_results: 1,
    };
    (apiMoviesDiscover as jest.Mock).mockResolvedValueOnce({data: mockData});

    await store.dispatch(moviesDiscover('query'));

    const state = store.getState().movies;
    expect(state.moviesDiscover).toEqual(mockData);
  });
});
