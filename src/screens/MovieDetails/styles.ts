import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors';

export default StyleSheet.create({
  title: {
    marginVertical: 15,
  },
  genresContainer: {
    padding: 5,
    backgroundColor: darkTheme.colors.primary,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  movieDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});
