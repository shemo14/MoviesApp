import React from 'react';
import {Text} from '../index.ts';
import {Switch, View, SwitchProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

interface SwitchBoxProps {
  label: string;
}
const SwitchBox: React.FC<SwitchProps & SwitchBoxProps> = props => {
  const {colors} = useTheme();
  const {label} = props;

  return (
    <View style={styles.container}>
      <Text type={'p2'} style={styles.label}>
        {label}
      </Text>
      <Switch
        trackColor={{false: colors.grey, true: colors.primary}}
        thumbColor={colors.black}
        ios_backgroundColor={colors.grey}
        {...props}
      />
    </View>
  );
};

export default SwitchBox;
