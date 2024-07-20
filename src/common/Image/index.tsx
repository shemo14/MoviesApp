import React, {ReactElement} from 'react';
import {requireNativeComponent, ImageProps, Text} from 'react-native';

const PosterView = requireNativeComponent<ImageProps>('PosterView');

const Image = (props: {style: any; source: any; children: ReactElement}) => {
  const {style, source, children} = props;
  return (
    <PosterView style={style} imageUrl={source.uri} resizeMode={'cover'}>
      {children}
    </PosterView>
  );
};

export default Image;
