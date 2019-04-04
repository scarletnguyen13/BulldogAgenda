import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const TextArea = ({
  placeholder, _change, block, value
}) => (
  <View style={styles.textAreaContainer}>
    <TextInput
      style={styles.textArea}
      placeholder={placeholder}
      numberOfLines={10}
      multiline
      onChangeText={input => _change(block, input)}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  textAreaContainer: {
    width: '80%',
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginTop: 10
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start'
  }
});

export default TextArea;
