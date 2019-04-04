import React from 'react';
import {
  TouchableOpacity, Text, View, StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';

const BlueButton = ({
  functions, routeName, navigation, width, height, margin, content
}) => (
  <TouchableOpacity
    onPress={() => {
      // eslint-disable-next-line no-unused-expressions
      functions;
      navigation.navigate(routeName);
    }}
  >
    <View style={buttonStyle(width, height, margin)}>
      <Text style={styles.blueButtonText}>{content}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  blueButtonText: {
    fontSize: 16,
    color: 'white'
  }
});

function buttonStyle(width, height, margin) {
  return {
    width,
    height,
    borderRadius: 10,
    backgroundColor: '#140bb9',
    margin,
    justifyContent: 'center',
    alignItems: 'center'
  };
}

export default withNavigation(BlueButton);
