import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {getMovies} from '../../features/movies/requests';
import {setPage} from '../../features/movies';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import MovieItem from '../../components/MovieItem';
import {Container, SearchInput, UserLocation, Loader} from '../../common';

const Movies = () => {
  const {results, page, total_pages} = useAppSelector(
    state => state.movies.moviesResponse,
  );
  const loading = useAppSelector(state => state.movies.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (page < total_pages && !loading) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <Container>
      <SearchInput />
      <FlatList
        data={results}
        renderItem={({item}: any) => <MovieItem movie={item} />}
        numColumns={3}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<Loader />}
      />
      <UserLocation />
    </Container>
  );
};

export default Movies;
