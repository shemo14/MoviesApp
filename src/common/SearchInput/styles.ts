import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors';
export default StyleSheet.create({
  inputView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
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
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});
