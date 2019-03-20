import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class TextArea extends Component {
  render() {
    return (
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder={this.props.placeholder}
          numberOfLines={10}
          multiline={true}
          onChangeText={(value) => this.props._change(value)}
          value={this.props.value}
        />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  textAreaContainer: {
    width: '80%',
    borderBottomWidth: 2,
    paddingBottom: 10 
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
});

export default TextArea;

//placeholder, value, _change