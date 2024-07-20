import React, {useEffect, useState, useCallback} from 'react';
import {
  NativeModules,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {Location} from '../../assets/svg';
import styles from './styles';

const {LocationManager} = NativeModules;

const UserLocation = () => {
  const [location, setLocation] = useState({latitude: null, longitude: null});

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const currentLocation = useCallback(async () => {
    if (Platform.OS === 'android') {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        return;
      }
    }

    try {
      const callbackLocation = await LocationManager.getCurrentLocation();
      setLocation(callbackLocation);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    currentLocation();
  }, [currentLocation]);

  const openMyLocationOnMap = () => {
    if (location) {
      const {latitude, longitude} = location;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url).catch(err =>
        console.error('Error opening Google Maps:', err),
      );
    } else {
      Alert.alert('Error', 'Location not available.');
    }
  };

  return (
    <TouchableOpacity
      onPress={openMyLocationOnMap}
      style={styles.TouchableLocation}
      activeOpacity={0.8}>
      <Location width={40} height={40} />
    </TouchableOpacity>
  );
};

export default UserLocation;
