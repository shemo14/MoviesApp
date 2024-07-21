const state = {
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
export const testAppSelector = (f: any) => f(state);
