import {configureStore} from '@reduxjs/toolkit';
import trailersReducer, {TrailersState} from '../src/features/trailers';
import {getMovieTrailer} from '../src/features/trailers/requests';
import {apiGetMovieTrailer} from '../src/features/trailers/api';

jest.mock('../src/features/trailers/api', () => ({
  apiGetMovieTrailer: jest.fn(),
}));

describe('Redux Thunks - getMovieTrailer', () => {
  let store;
  const initialState: TrailersState = {
    trailerResponse: {
      items: [],
    },
  };

  beforeEach(() => {
    store = configureStore({
      reducer: {
        trailers: trailersReducer,
      },
      preloadedState: {trailers: initialState},
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getMovieTrailer thunk should return data on success', async () => {
    const mockData = {items: [{id: '1', title: 'Trailer 1'}]};
    (apiGetMovieTrailer as jest.Mock).mockResolvedValueOnce({data: mockData});

    await store.dispatch(getMovieTrailer('Monkey Man'));

    const state = store.getState().trailers;
    expect(state.trailerResponse.items).toEqual(mockData.items);
  });

  it('getMovieTrailer thunk should handle errors', async () => {
    (apiGetMovieTrailer as jest.Mock).mockRejectedValueOnce(
      new Error('API error'),
    );

    await store.dispatch(getMovieTrailer('Monkey Man'));

    const state = store.getState().trailers;
    expect(state.trailerResponse).toEqual(undefined);
  });
});
