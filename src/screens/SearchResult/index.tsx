import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {moviesDiscover} from '../../features/movies/requests';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import MovieItem from '../../components/MovieItem';
import {Container} from '../../common';

const SearchResult = (props: any) => {
  const {query} = props.route.params;
  const movies = useAppSelector(state => state.movies.moviesDiscover);
  const loading = useAppSelector(state => state.movies.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moviesDiscover(query));
  }, [dispatch, query]);

  return (
    <Container loading={loading}>
      <FlatList
        data={movies?.results}
        renderItem={({item}: any) => <MovieItem movie={item} />}
        numColumns={3}
      />
    </Container>
  );
};

export default SearchResult;
