import React from 'react';
import {requireNativeComponent, ViewStyle} from 'react-native';

interface PosterViewProps {
  style?: ViewStyle;
  imageUrl: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const PosterViewNative = requireNativeComponent<PosterViewProps>('PosterView');

const PosterView: React.FC<PosterViewProps> = props => {
  return <PosterViewNative {...props} />;
};

export default PosterView;
