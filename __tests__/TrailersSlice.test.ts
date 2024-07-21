import trailersReducer, {TrailersState} from '../src/features/trailers';
import {getMovieTrailer} from '../src/features/trailers/requests';
import {TrailerResponse} from '../src/features/trailers/interfaces';

describe('trailersSlice reducer', () => {
  const initialState: TrailersState = {
    trailerResponse: {
      items: [],
    },
  };

  it('should return the initial state', () => {
    expect(trailersReducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle getMovieTrailer.fulfilled', () => {
    const mockTrailerResponse: TrailerResponse = {
      items: [
        {
          id: {
            kind: 'id kind',
            videoId: 'video id',
          },
          snippet: {
            title: 'Trailer 1',
            publishedAt: '',
            channelId: '',
            description: '',
            thumbnails: {
              default: {
                url: '',
                width: 0,
                height: 0,
              },
              medium: {
                url: '',
                width: 0,
                height: 0,
              },
              high: {
                url: '',
                width: 0,
                height: 0,
              },
            },
            channelTitle: '',
            liveBroadcastContent: '',
            publishTime: '',
          },
          kind: '',
          etag: '',
        },
      ],
    };

    const action = {
      type: getMovieTrailer.fulfilled.type,
      payload: mockTrailerResponse,
    };

    const expectedState: TrailersState = {
      trailerResponse: mockTrailerResponse,
    };

    expect(trailersReducer(initialState, action)).toEqual(expectedState);
  });
});
