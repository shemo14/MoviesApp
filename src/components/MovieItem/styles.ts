import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  imageBackground: {
    width: width * 0.29,
    height: 200,
  },
  movieTitleContainer: {
    backgroundColor: '#0000009c',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'auto',
    padding: 2,
  },
});
