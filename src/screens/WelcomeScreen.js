import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../../assets/images/index';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        <Image 
          source={Images.bulldog}
        />
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Settings')}>
          <View style={styles.welcomeButton}>
              <Text style={styles.welcomeButtonText}>GET STARTED</Text>
          </View>
        </TouchableOpacity>
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
  },
  welcomeButton: {
    width: 130, 
    height: 60, 
    borderRadius: 10, 
    backgroundColor: '#140bb9', 
    margin: 25, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  welcomeButtonText: {
    fontSize: 16, 
    color: "white"
  }
});

export default WelcomeScreen;