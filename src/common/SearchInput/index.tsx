import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {Search} from '../../assets/svg';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks.ts';
import {getMoviesSearch} from '../../features/movies/requests.ts';
import SearchItem from '../SearchItem';
import styles from './styles';

const SearchInput = () => {
  const {colors} = useTheme();
  const [search, setSearch] = useState<string>('');
  const height = useSharedValue(0);
  const dispatch = useAppDispatch();
  const searchResponse = useAppSelector(state => state.movies.searchResponse);

  const searchHandler = (val: string) => {
    setSearch(val);
    dispatch(getMoviesSearch(val));
    if (val.length > 3) {
      height.value = withSpring(height.value + 300);
    }

    if (val.length === 0) {
      height.value = withSpring(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder={'Search ....'}
          placeholderTextColor={colors.black}
          onChangeText={searchHandler}
          value={search}
          style={styles.input}
        />
        <Search width={20} height={20} fill={colors.black} />
      </View>
      <Animated.View style={[styles.searchResultContainer, {height}]}>
        <ScrollView>
          {searchResponse?.results.map((movie, i) => (
            <SearchItem movie={movie} key={i} />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default SearchInput;
