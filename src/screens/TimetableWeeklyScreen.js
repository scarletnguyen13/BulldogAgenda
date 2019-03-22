import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class TimetableWeeklyScreen extends Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center", 
    justifyContent: "center"
  }
});

export default TimetableWeeklyScreen;