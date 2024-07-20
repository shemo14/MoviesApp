import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors.ts';

export default StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    height: 40,
    padding: 10,
    borderColor: darkTheme.colors.grey,
    borderWidth: 1,
  },
  input: {
    color: darkTheme.colors.black,
    width: '100%',
    height: '100%',
  },
});
