import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import CalendarEventItem from '../../../components/Items/CalendarEventItem';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import firebase from 'react-native-firebase';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('calendar');
    this.state = {
      selected: moment(new Date()).format('YYYY-MM-DD'),
      calendar: [],
      events: [],
      day: '',
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  componentWillUnmount() {
    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot((querySnapshot) => {
      const calendarList = [];
      querySnapshot.forEach((doc) => {
        calendarList.push(doc.data());
      });
      this.setState({ calendar: calendarList })
      this.initEvents(calendarList, this.state.selected);
    }); 
  }

  onDayPress(date) {
    this.setState({
      selected: date.dateString,
    });

    this.state.calendar.map(dateObj => { 
      if(dateObj.date === moment(date.dateString).format('DD-MM-YYYY')) {
        this.setState({ 
          day: dateObj.day,
          events: dateObj.events
        })
      }
    })
  }

  initEvents(calendar, date) {
    calendar.map(dateObj => { 
      if(dateObj.date === moment(date.dateString).format('DD-MM-YYYY')) {
        this.setState({ 
          day: dateObj.day,
          events: dateObj.events
        })
      }
    })
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={styles.textContainer}>
              <View style={styles.eventCircle}>
                <Text style={styles.eventNumber}>{this.state.events.length}</Text>
              </View>
              <Text style={styles.eventText}>{this.state.events.length > 1 ? 'Events' : 'Event'}</Text>
            </View>
            <View style={{width: 90, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e6', marginRight: 30, borderRadius: 100}}><Text>{this.state.day}</Text></View>
          </View>

          <ScrollView>
           
              <FlatList
                data={this.state.events}
                renderItem={({ item }) => (
                  <CalendarEventItem courseColor = '#140bb9' content={item}/>
                )}
                keyExtractor={item => item}
              />
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
    backgroundColor: '#f7f7f7'
  },
  textContainer: {
    width: 110,
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
    marginRight: 25
  }
});

export default CalendarScreen;