import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class BlueButton extends Component {
  render() {
    return (
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate(this.props.routeName)}>
        <View style={buttonStyle(this.props.width, this.props.height, this.props.margin)}>
            <Text style={styles.blueButtonText}>{this.props.content}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  blueButtonText: {
    fontSize: 16, 
    color: "white"
  }
});

function buttonStyle(width, height, margin) {
  return {
    width: width, 
    height: height, 
    borderRadius: 10, 
    backgroundColor: '#140bb9', 
    margin: margin, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
}

export default withNavigation(BlueButton);


//routeName, width, height, margin, content
