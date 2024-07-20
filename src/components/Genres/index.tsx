import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../common';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import {getGenres} from '../../features/movies/requests.ts';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const Genres = ({
  onSelectGenres,
}: {
  onSelectGenres: (selectedGenres) => void;
}) => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const genres = useAppSelector(state => state.movies.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    onSelectGenres(selectedGenres);
  }, [onSelectGenres, selectedGenres]);

  const selectGenresHandler = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres =>
        selectedGenres.filter(item => item !== genreId),
      );
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <View>
      <Text type={'p2'} style={styles.label}>
        Select Genres :
      </Text>
      <View style={styles.genresContainer}>
        {genres.map((genre, i) => (
          <TouchableOpacity
            onPress={() => selectGenresHandler(genre.id)}
            key={i}
            style={[
              {
                backgroundColor: selectedGenres.includes(genre.id)
                  ? colors.black
                  : colors.primary,
              },
              styles.genre,
            ]}>
            <Text
              type={'p4'}
              style={{
                color: selectedGenres.includes(genre.id)
                  ? colors.white
                  : colors.black,
              }}>
              {genre.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Genres;
