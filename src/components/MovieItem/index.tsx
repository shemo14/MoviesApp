import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Movie} from '../../features/movies/interfaces';
import {imgPath} from '../../app/ClientConnection';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/ScreensEnum.ts';
import {MovieTitle, PosterView} from '../../common';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';

const MovieItem = ({movie}: {movie: Movie}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.MovieDetails, {movie})}
      style={styles.container}>
      <PosterView
        imageUrl={imgPath(movie.poster_path)}
        style={styles.imageBackground}
        title={
          <MovieTitle
            title={movie.original_title}
            styles={styles.movieTitleContainer}
          />
        }
      />
    </TouchableOpacity>
  );
};

export default MovieItem;
