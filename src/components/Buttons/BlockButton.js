import React, {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import getContrastYIQ from '../ContrastHelper';

class BlockButton extends Component {
  render() {
        return(
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('CourseDetails', {
              courseInfo: this.props.courseInfo
            })}}>
            <View style={[styles.blockButton, backgroundColor(this.props.courseInfo.courseColor)]}>
              <Text style={[styles.blockButtonText, textColor(this.props.courseInfo.courseColor)]}>{this.props.courseInfo.courseBlock}</Text>
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
    margin: 15, 
    marginBottom: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  blockButtonText: {
    fontSize: 16
  }
});

function textColor(color) {
  return {
    color: getContrastYIQ(color) 
  }
}

function backgroundColor(color) {
  return {
    backgroundColor: color 
  }
}

export default withNavigation(BlockButton);