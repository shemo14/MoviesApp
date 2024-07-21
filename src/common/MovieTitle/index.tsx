import React from 'react';
import {View, ViewStyle} from 'react-native';
import Text from '../Text';

interface MovieTitleProps {
  styles?: ViewStyle;
  title: string;
}
const MovieTitle: React.FC<MovieTitleProps> = props => {
  const {styles, title} = props;
  return (
    <View style={styles}>
      <Text type={'p4'}>{title}</Text>
    </View>
  );
};

export default MovieTitle;
