import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: darkTheme.colors.grey,
  },
  image: {
    width: 50,
    height: 100,
  },
  textContainer: {
    marginStart: 20,
  },
  dateText: {
    color: darkTheme.colors.grey,
  },
});
