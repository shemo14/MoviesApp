import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TrailerResponse} from './interfaces';
import {getMovieTrailer} from './requests';

export interface TrailersState {
  trailerResponse: TrailerResponse;
}

const initialState: TrailersState = {
  trailerResponse: {
    items: [],
  },
};

export const TrailersSlice = createSlice({
  name: 'trailers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getMovieTrailer.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.trailerResponse = action.payload;
      },
    );
  },
});

export default TrailersSlice;
