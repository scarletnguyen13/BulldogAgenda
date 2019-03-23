import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CalendarBlock from '../components/CalendarBlock';
import { Calendar } from 'react-native-calendars';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }

  render() {
    return (
      <View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
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
    width: 30,
    height: 30,
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