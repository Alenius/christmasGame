import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';
import AppStyles from '../AppStyles';

interface Props {
  text: String;
  style?: Object;
  onPress: Function;
}

interface Styles {
  root: ViewStyle;
  text: TextStyle;
}

const styleObject: Styles = {
  root: {
    backgroundColor: AppStyles.colors.green1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: AppStyles.colors.white,
  },
};

const styles = StyleSheet.create<Styles>(styleObject);

const Button: React.FC<Props> = ({text, style, onPress = null}) => {
  return (
    <TouchableOpacity style={[styles.root, style]} onPress={() => onPress()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
