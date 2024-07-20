import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiGetMovieTrailer} from './api';
import {TrailerResponse} from './interfaces';

export const getMovieTrailer = createAsyncThunk<TrailerResponse, string>(
  'trailers/getMovieTrailer',
  async title => {
    try {
      const {data} = await apiGetMovieTrailer(title);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);
