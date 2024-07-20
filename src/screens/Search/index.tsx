import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Container, Text, SwitchBox, Input} from '../../common';
import {Genres} from '../../components';
import {screens} from '../../navigation/ScreensEnum';
import styles from './styles';

const Search = props => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [includeAdult, setIncludeAdult] = useState<boolean>(false);
  const [includeVideo, setIncludeVideo] = useState<boolean>(false);
  const [year, setYear] = useState<string>('');
  const {navigation} = props;

  const onFilter = () => {
    const query = `?include_adult=${includeAdult}&include_video=${includeVideo}&with_genres=${selectedGenres.toString()}&primary_release_year=${year}`;
    navigation.navigate(screens.SearchResult, {query});
  };

  return (
    <Container>
      <View style={styles.container}>
        <Genres onSelectGenres={setSelectedGenres} />
        <SwitchBox
          onValueChange={setIncludeAdult}
          label={'Include Adult'}
          value={includeAdult}
        />
        <SwitchBox
          label={'Include Video'}
          onValueChange={setIncludeVideo}
          value={includeVideo}
        />
        <Input
          placeholder={'Set release year ...'}
          label={'Released Year'}
          onChangeText={setYear}
          value={year}
        />
      </View>
      <TouchableOpacity onPress={() => onFilter()} style={styles.filterButton}>
        <Text type={'p2'}>Filter</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Search;
