import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors';
export default StyleSheet.create({
  label: {
    marginVertical: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  genre: {
    padding: 5,
    marginBottom: 10,
    marginEnd: 10,
  },
});
