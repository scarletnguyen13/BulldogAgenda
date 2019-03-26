import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

class CheckBox extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.outerContainer} onPress={this.props.handleClick}>
        {this.props.boxImage}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CheckBox;
