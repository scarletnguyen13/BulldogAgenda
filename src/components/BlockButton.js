import React, {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class BlockButton extends Component {
  render() {
        return(
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('CourseDetails', {
              key: this.props.block
            })}}>
            <View style={styles.blockButton}>
              <Text style={styles.blockButtonText}>{this.props.block}</Text>
            </View>
          </TouchableOpacity>
        );
      }
}

const styles = StyleSheet.create({
  blockButton: {
    width: 100, 
    height: 60, 
    borderRadius: 10, 
    backgroundColor: '#c6c3c3', 
    margin: 15, 
    marginBottom: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  blockButtonText: {
    fontSize: 16, 
    color: "black"
  }
});

export default withNavigation(BlockButton);