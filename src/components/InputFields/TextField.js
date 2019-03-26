import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

class TextField extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.label}>{this.props.label}</Text>
      <TextInput
        style = {styles.textInputStyle}
        placeholder = {this.props.placeholder}
        onChangeText = {(value) => this.props._change(this.props.block, value)}
        value = {this.props.value}/>  
      </View>
      
    );
  }
} 

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

//placeholder, value, _change