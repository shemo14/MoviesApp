import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {hideToast} from '../../features/toast';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';

const Toast = () => {
  const [animation] = useState(new Animated.Value(0));
  const dispatch = useAppDispatch();
  const {message, visible} = useAppSelector(state => state.toast);

  useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            hideToast();
          });
        }, 3000);
      });
    }
  }, [animation, visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          opacity: animation,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles.toastMessage}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    zIndex: 1000,
  },
  toastMessage: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Toast;
