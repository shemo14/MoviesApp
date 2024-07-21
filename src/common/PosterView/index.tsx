import React from 'react';
import {ViewStyle, View} from 'react-native';
import Image from '../Image';

interface PosterViewProps {
  style?: ViewStyle;
  imageUrl: string;
  title: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const PosterView: React.FC<PosterViewProps> = props => {
  return (
    <View>
      <Image
        imageUrl={props.imageUrl}
        style={props.style}
        resizeMode={props.resizeMode}
      />
      {props.title}
    </View>
  );
};

export default PosterView;
