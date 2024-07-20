import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors';
export default StyleSheet.create({
  container: {
    zIndex: 1,
  },
  inputView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: darkTheme.colors.grey,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: darkTheme.colors.black,
  },
  searchResultContainer: {
    width: '100%',
    backgroundColor: darkTheme.colors.white,
    position: 'absolute',
    top: 40,
    paddingVertical: 15,
  },
});
