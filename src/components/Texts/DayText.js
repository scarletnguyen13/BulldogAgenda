import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DayText = ({ day }) => (<Text style={styles.dayText}>{day}</Text>);

const styles = StyleSheet.create({
  dayText: {
    fontSize: 16,
    margin: 40,
    marginBottom: 30
  }
});

export default DayText;
