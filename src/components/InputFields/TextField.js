import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class TextField extends Component {
  render() {
    return (
      <TextInput
        style = {styles.textInputStyle}
        placeholder = {this.props.placeholder}
        onChangeText = {(value) => this.props._change(this.props.block, value)}
        value = {this.props.value}
      />
    );
  }
} 

const styles = StyleSheet.create({
  textInputStyle: {
    width: '80%', 
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 2, 
    marginBottom: 40
  },
});

export default TextField;

//placeholder, value, _change