import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  label: {
    marginEnd: 10,
  },
  dateText: {
    color: darkTheme.colors.grey,
  },
});
