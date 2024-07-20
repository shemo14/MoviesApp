import React, {useEffect} from 'react';
import {View} from 'react-native';
import {getMovieDetails} from '../../features/movies/requests';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import {getMovieTrailer} from '../../features/trailers/requests.ts';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Container, Text} from '../../common';
import styles from './styles';

const MovieDetails = (props: any) => {
  const {movie} = props.route.params;
  const movieDetails = useAppSelector(state => state.movies.movieDetails);
  const movieTrailers = useAppSelector(state => state.trailers.trailerResponse);
  const loading = useAppSelector(state => state.movies.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(movie?.id));
  }, [dispatch, movie]);

  useEffect(() => {
    if (movieDetails) {
      dispatch(getMovieTrailer(movieDetails?.title));
    }
  }, [dispatch, movie, movieDetails]);

  return (
    <Container loading={loading}>
      <YoutubePlayer
        height={250}
        play={false}
        videoId={movieTrailers?.items[0]?.id?.videoId}
      />
      <Text type={'h2'} style={styles.title}>
        {movieDetails?.title}
      </Text>
      <Text type={'p2'}>{movieDetails?.overview}</Text>
      <View style={styles.movieDetailsContainer}>
        {movieDetails?.genres.map((genre, i) => (
          <View key={i} style={styles.genresContainer}>
            <Text type={'i1'}>{genre.name}</Text>
          </View>
        ))}
      </View>
    </Container>
  );
};

export default MovieDetails;
