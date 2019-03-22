import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getContrastYIQ from '../components/ContrastHelper';

class TimetableDailyBlock extends Component {
  render() {
    const color = this.props.courseColor;
    return (
      <TouchableOpacity style={setSize(this.props.flex)}>
        <View style={[styles.container, setbBackgroundColor(color)]}>
          <Text style={[styles.blockText, setContrastColor(color)]}>{this.props.courseBlock}</Text>
          <View style={styles.centerContainer}>
            <Text style={[styles.courseText, setContrastColor(color)]}>{this.props.courseName}</Text>
            <Text style={setContrastColor(color)}>{this.props.courseRoom}</Text>
          </View>
            <Icon name="ios-arrow-down" size={35} color={getContrastYIQ(color)} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 30
  },
  blockText: {
    fontSize: 15
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  courseText: {
    marginBottom: 20, 
    fontSize: 23
  }
});

function setbBackgroundColor(color) {
  return {
    backgroundColor: color
  }
}

function setContrastColor(color) {
  return {
    color: getContrastYIQ(color)
  }
}

function setSize(size) {
  return {
    flex: size
  }
}

export default TimetableDailyBlock;