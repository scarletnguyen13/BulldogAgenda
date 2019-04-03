import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import moment from 'moment';
import firebase from 'react-native-firebase';
import IconButton from './Buttons/IconButton';

class CalendarStrip extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('calendar');
    const { currentDate } = this.props;
    this.state = {
      currentDate,
      calendar: [],
      day: ''
    };
    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
    this.today = this.today.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  componentDidMount() {
    const { currentDate } = this.props;
    this.unsubscribe = this.ref.onSnapshot((querySnapshot) => {
      const calendarList = [];
      querySnapshot.forEach((doc) => {
        calendarList.push(doc.data());
      });
      this.setState({ calendar: calendarList });
      this.initContent(calendarList, currentDate);
    });
  }

  componentWillUnmount() {
    this.unsubscribe = null;
  }

  prevDate = () => {
    const { currentDate } = this.state;
    const prevDate = moment(currentDate).subtract(1, 'days').toDate();
    this.setState({ currentDate: prevDate });
    this.changeContent(prevDate);
  }

  nextDate = () => {
    const { currentDate } = this.state;
    const nextDate = moment(currentDate).add(1, 'days').toDate();
    this.setState({ currentDate: nextDate });
    this.changeContent(nextDate);
  }

  today = () => {
    const { currentDate } = this.props;
    const today = currentDate;
    this.setState({ currentDate: today });
    this.changeContent(today);
  }

  changeContent(date) {
    const { calendar } = this.state;
    const { _onChangeDay } = this.props;
    calendar.map((dateObj) => {
      if (dateObj.date === moment(date).format('DD-MM-YYYY')) {
        const { day, events } = dateObj;
        _onChangeDay(date, day, events);
        this.setState({ day });
        return day;
      }
      return null;
    });
  }

  initContent(calendar, date) {
    const { _onChangeDay } = this.props;
    calendar.map((dateObj) => {
      if (dateObj.date === moment(date).format('DD-MM-YYYY')) {
        const { day, events } = dateObj;
        _onChangeDay(date, day, events);
        this.setState({ day });
        return day;
      }
      return null;
    });
  }

  render() {
    const { day, currentDate } = this.state;
    return (
      <View style={styles.blockContainer}>
        <IconButton
          name="ios-arrow-dropleft-circle"
          margin={0}
          size={20}
          color="gray"
          onPress={this.prevDate}
        />

        <TouchableOpacity
          onPress={this.today}
        >
          <View style={styles.todayContainer}>
            <Text style={styles.todayText}>{day}</Text>
            <Text style={styles.todayText}>{moment(currentDate).format('dddd')}</Text>
            <Text style={styles.todayText}>{moment(currentDate).format('MMM D')}</Text>
          </View>
        </TouchableOpacity>

        <IconButton
          name="ios-arrow-dropright-circle"
          margin={0}
          size={20}
          color="gray"
          onPress={this.nextDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    width: '100%',
    height: '7%',
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 18,
    paddingLeft: 18
  },
  todayContainer: {
    width: 250,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todayText: {
    fontSize: 14,
    textTransform: 'uppercase'
  },
});

export default CalendarStrip;
