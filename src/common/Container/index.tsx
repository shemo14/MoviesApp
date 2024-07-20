import React from 'react';
import {View} from 'react-native';
import Text from '../Text';
import styles from './style';

const Container = (props: any) => {
  const {loading} = props;

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderView}>
          <Text type={'h1'}>{'Im loading now ...............'}</Text>
        </View>
      ) : (
        props.children
      )}
    </View>
  );
};

export default Container;
