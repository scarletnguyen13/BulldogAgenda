import React from 'react';
import {
  TextInput, StyleSheet, View, Text
} from 'react-native';

const TextField = ({
  label, placeholder, block, value, _change
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.textInputStyle}
      placeholder={placeholder}
      onChangeText={input => _change(block, input)}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    marginBottom: 50
  },
  label: {
    fontWeight: '500',
    fontSize: 13,
    color: '#717171'
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 2,
  },
});

export default TextField;
