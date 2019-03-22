import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CalendarBlock from '../components/CalendarBlock';

class CalendarScreen extends Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        <Calendar 
        style={styles.calendar} 
        markedDates={{
          '2019-03-16': {selected: true, marked: true, selectedColor: '#8BC34A'},
          '2019-05-17': {marked: true},
          '2019-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2019-05-19': {disabled: true, disableTouchEvent: true}
        }}
        />

        <View style={styles.eventsContainer}>
          <View style={styles.textContainer}>
            <View style={styles.eventCircle}>
              <Text style={styles.eventNumber}>4</Text>
            </View>
            <Text style={styles.eventText}>My events</Text>
          </View>
          <ScrollView>
            <CalendarBlock courseColor = '#8BC34A'/>
            <CalendarBlock courseColor = '#E91E63'/>
            <CalendarBlock courseColor = '#FFEB3B'/>
            <CalendarBlock courseColor = '#2196F3'/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 0,
    height: '50%',
    width: '100%',
    marginBottom: '15%'
  },
  eventsContainer: {
    height: '41%',
    width: '100%',
    backgroundColor: '#f7f7f7',
    flexDirection:'column'
  },
  textContainer: {
    width: 140,
    height: 30,
    backgroundColor: '#e6e6e6',
    borderRadius: 100,
    margin: 20,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  eventCircle: {
    width: 35,
    height: 35,
    backgroundColor: '#3E3E3E',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventNumber: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  eventText: {
    marginRight: 25,
    fontSize: 13
  }
});

export default CalendarScreen;