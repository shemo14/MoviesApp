import React from 'react';
import {screens} from '../../navigation/ScreensEnum.ts';
import {Image, TouchableOpacity, View} from 'react-native';
import {imgPath} from '../../app/ClientConnection.ts';
import {Text} from '../index.ts';
import {useNavigation} from '@react-navigation/native';
import {Movie} from '../../features/movies/interfaces.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';

const SearchItem = ({movie}: {movie: Movie}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.MovieDetails, {movie})}
      style={styles.container}>
      <Image
        source={{uri: imgPath(movie?.poster_path)}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <View style={styles.textContainer}>
        <Text type={'p2'}>{movie.title}</Text>
        <Text type={'p3'} style={styles.dateText}>
          {movie.release_date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;
