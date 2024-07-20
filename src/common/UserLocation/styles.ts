import {StyleSheet} from 'react-native';
import {darkTheme} from '../../utils/theme/colors.ts';

export default StyleSheet.create({
  TouchableLocation: {
    backgroundColor: darkTheme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    bottom: 20,
    right: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
