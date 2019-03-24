import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CalendarBlock extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.outerCircle, setBackgroundColor(this.props.courseColor)]}>
          <View style={styles.innerCircle}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.courseText}>Biology</Text>
          <Text style={styles.contentText}>Researching about resistance bacteria</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginLeft: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 13,
    height: 13,
    borderRadius: 100,
    backgroundColor: '#f7f7f7'
  },
  textContainer: {
    marginLeft: 35,
    width: 230,
    height: '100%'
  },
  courseText: {
    fontSize: 12,
    color: '#6c6c6c'
  },
  contentText: {
    marginTop: 15,
    fontWeight: 'bold'
  }
});

function setBackgroundColor(color) {
  return {
    backgroundColor: color
  };
}

export default CalendarBlock;