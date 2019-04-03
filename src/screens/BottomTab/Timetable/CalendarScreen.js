import React, { Component } from 'react';
import {
  View, StyleSheet, Text, ScrollView, FlatList
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import CalendarEventItem from '../../../components/Items/CalendarEventItem';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('calendar');
    this.state = {
      selected: moment(new Date()).format('YYYY-MM-DD'),
      calendar: [],
      events: [],
      day: ''
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  componentDidMount() {
    const { selected } = this.state;
    this.unsubscribe = this.ref.onSnapshot((querySnapshot) => {
      const calendarList = [];
      querySnapshot.forEach((doc) => {
        calendarList.push(doc.data());
      });
      this.setState({ calendar: calendarList });
      this.initEvents(calendarList, selected);
    });
  }

  componentWillUnmount() {
    this.unsubscribe = null;
  }

  onDayPress(date) {
    const { calendar } = this.state;

    this.setState({
      selected: date.dateString,
    });

    calendar.map((dateObj) => {
      if (dateObj.date === moment(date.dateString).format('DD-MM-YYYY')) {
        this.setState({
          day: dateObj.day,
          events: dateObj.events
        });
      }
      return null;
    });
  }

  initEvents(calendar, date) {
    calendar.map((dateObj) => {
      if (dateObj.date === moment(date.dateString).format('DD-MM-YYYY')) {
        this.setState({
          day: dateObj.day,
          events: dateObj.events
        });
      }
      return null;
    });
  }

  render() {
    const {
      calendar, selected, events, day
    } = this.state;
    const { blocks, todos } = this.props;

    const markedDates = [];
    const breakPeriod = [];

    calendar.map((dateObj) => {
      if (dateObj.events.length > 0) {
        const formattedDate = `${dateObj.date.substring(6, 10)}-${dateObj.date.substring(3, 5)}-${dateObj.date.substring(0, 2)}`;
        // eslint-disable-next-line no-unused-expressions
        dateObj.day === 'Break' || dateObj.day === 'Day Off' ? breakPeriod.push(formattedDate) : markedDates.push(formattedDate);
      }
      return null;
    });

    let markedDatesObject = {};

    markedDates.forEach((date) => {
      markedDatesObject = {
        ...markedDatesObject,
        [date]: {
          marked: true
        }
      };
    });

    breakPeriod.forEach((date) => {
      markedDatesObject = {
        ...markedDatesObject,
        [date]: {
          marked: true, dotColor: 'red'
        }
      };
    });

    markedDatesObject = {
      ...markedDatesObject,
      [selected]: {
        selected: true
      }
    };

    const values = Object.values(blocks);
    const COURSES = [];
    values.forEach((blockObj) => {
      COURSES.push({ [blockObj.courseName]: blockObj.courseColor });
    });

    const currentDayTodos = [];
    todos.todoList.map((todo) => {
      if (moment(todo.dueDate).format('YYYY-MM-DD') === selected) {
        currentDayTodos.push(todo);
      }
      return null;
    });

    return (
      <View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={markedDatesObject}
        />
        <View style={styles.eventsContainer}>
          <View style={styles.indicatorContainer}>
            <View style={styles.textContainer}>
              <View style={styles.eventCircle}>
                <Text style={styles.eventNumber}>{events.length}</Text>
              </View>
              <Text style={styles.eventText}>{events.length > 1 ? 'Events' : 'Event'}</Text>
            </View>
            <View style={styles.dayContainer}>
              <Text>{day}</Text>
            </View>
          </View>

          <ScrollView>
            <FlatList
              data={events}
              renderItem={({ item }) => (
                <CalendarEventItem courseColor="#140bb9" content={item} completed={false} />
              )}
              keyExtractor={item => item}
            />
            {currentDayTodos.length > 0 && events.length > 0
            && <View style={{ height: 5, backgroundColor: '#3E3E3E' }} />}
            {
              currentDayTodos.map((todo) => {
                if (moment(todo.dueDate).format('YYYY-MM-DD') === selected) {
                  return (
                    <CalendarEventItem
                      key={todo.id}
                      courseColor={Object.values(COURSES[todo.course])}
                      course={Object.keys(COURSES[todo.course])}
                      content={todo.description}
                      completed={todo.check}
                    />
                  );
                }
                return null;
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 0,
    height: '48%',
    width: '100%',
    marginBottom: '15%'
  },
  eventsContainer: {
    height: '41%',
    width: '100%',
    backgroundColor: '#f7f7f7'
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    width: 110,
    height: 30,
    backgroundColor: '#e6e6e6',
    borderRadius: 100,
    margin: 10,
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
  },
  dayContainer: {
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    marginRight: 30,
    borderRadius: 100
  }
});

const mapStateToProps = (state) => {
  const { blocks, todos } = state;
  return { blocks, todos };
};

export default connect(mapStateToProps)(CalendarScreen);
