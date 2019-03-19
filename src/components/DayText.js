import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

class DayText extends Component {
  render() {
    return <Text style={styles.dayText}>{this.props.day}</Text>;
  }
}

const styles = StyleSheet.create({
  dayText: {
    fontSize: 16, 
    margin: 40, 
    marginBottom: 30
  }
});

export default DayText;

