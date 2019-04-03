import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const CheckBox = ({ handleClick, boxImage }) => (
  <TouchableOpacity style={styles.outerContainer} onPress={handleClick}>
    {boxImage}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CheckBox;
