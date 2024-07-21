import {setPage} from '../src/features/movies';
import moviesReducer from '../src/features/movies';
import {
  getMovies,
  getMovieDetails,
  getMoviesSearch,
  getGenres,
  moviesDiscover,
} from '../src/features/movies/requests';

const initialState = {
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

describe('MoviesSlice reducer', () => {
  it('should handle initial state', () => {
    expect(moviesReducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle setPage', () => {
    const actual = moviesReducer(initialState, setPage(2));
    expect(actual.moviesResponse.page).toEqual(2);
  });

  it('should handle getMovies.pending', () => {
    const action = {type: getMovies.pending.type};
    const state = moviesReducer(initialState, action);
    expect(state.loading).toEqual(true);
  });

  it('should handle getMovies.fulfilled', () => {
    const action = {
      type: getMovies.fulfilled.type,
      payload: {results: [{id: 1, title: 'Test Movie'}], total_pages: 2},
    };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toEqual(false);
    expect(state.moviesResponse.results).toEqual([
      {id: 1, title: 'Test Movie'},
    ]);
    expect(state.moviesResponse.total_pages).toEqual(2);
  });

  it('should handle getMovieDetails.fulfilled', () => {
    const action = {
      type: getMovieDetails.fulfilled.type,
      payload: {id: 1, title: 'Test Movie'},
    };
    const state = moviesReducer(initialState, action);
    expect(state.movieDetails).toEqual({id: 1, title: 'Test Movie'});
  });

  it('should handle getMoviesSearch.fulfilled', () => {
    const action = {
      type: getMoviesSearch.fulfilled.type,
      payload: {results: [{id: 1, title: 'Searched Movie'}]},
    };
    const state = moviesReducer(initialState, action);
    expect(state.searchResponse).toEqual({
      results: [{id: 1, title: 'Searched Movie'}],
    });
  });

  it('should handle getGenres.fulfilled', () => {
    const action = {
      type: getGenres.fulfilled.type,
      payload: [{id: 1, name: 'Action'}],
    };
    const state = moviesReducer(initialState, action);
    expect(state.genres).toEqual([{id: 1, name: 'Action'}]);
  });

  it('should handle moviesDiscover.fulfilled', () => {
    const action = {
      type: moviesDiscover.fulfilled.type,
      payload: {results: [{id: 1, title: 'Discovered Movie'}]},
    };
    const state = moviesReducer(initialState, action);
    expect(state.moviesDiscover).toEqual({
      results: [{id: 1, title: 'Discovered Movie'}],
    });
  });
});
