import React from 'react';
import {Text} from '../index.ts';
import styles from './styles';
import {TextInput, View, TextInputProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface InputProps {
  label: string;
}
const Input: React.FC<TextInputProps & InputProps> = props => {
  const {colors} = useTheme();
  const {label} = props;
  return (
    <View>
      <Text type={'p2'} style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={colors.black}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
