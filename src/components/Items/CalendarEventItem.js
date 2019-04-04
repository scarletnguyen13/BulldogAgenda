import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarEventItem = ({
  courseColor, completed, course, content
}) => (
  <View style={styles.container}>
    <View style={[styles.outerCircle, setBackgroundColor(courseColor)]}>
      <View style={styles.innerCircle}>
        {completed === false && (
        <View style={[styles.checkCircle, setBackgroundColor(courseColor)]} />
        )}
      </View>
    </View>
    <View style={styles.textContainer}>
      {course !== undefined && <Text style={{ marginBottom: 10 }}>{course}</Text>}
      <Text style={styles.contentText}>
        {content}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
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
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginLeft: 35,
    width: 230,
    justifyContent: 'center'
  },
  courseText: {
    fontSize: 12,
    color: '#6c6c6c'
  },
  contentText: {
    fontWeight: 'bold'
  },
  checkCircle: {
    width: 6,
    height: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function setBackgroundColor(color) {
  return { backgroundColor: color };
}

export default CalendarEventItem;
