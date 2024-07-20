import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {getMovies} from '../../features/movies/requests';
import {setPage} from '../../features/movies';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import MovieItem from '../../components/MovieItem';
import {Container, SearchInput, UserLocation} from '../../common';

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

  const RenderLoaderIcon = () => {
    return <ActivityIndicator size="large" color="#fff" />;
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
        ListFooterComponent={<RenderLoaderIcon />}
      />
      <UserLocation />
    </Container>
  );
};

export default Movies;
