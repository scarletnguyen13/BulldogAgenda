import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import IconButton from './Buttons/IconButton';
import moment from 'moment';
import firebase from 'react-native-firebase';

class CalendarStrip extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('calendar');
    this.state = {
      currentDate: this.props.currentDate,
      calendar: [],
      day: ''
    }
    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
    this.today = this.today.bind(this);
    this.changeContent = this.changeContent.bind(this);
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
      this.initContent(calendarList, this.props.currentDate);
    }); 
  }

  prevDate = () => {
    const prevDate = moment(this.state.currentDate).subtract(1, 'days').toDate();
    this.setState({ currentDate: prevDate });
    this.changeContent(prevDate);
  }

  nextDate = () => {
    const nextDate = moment(this.state.currentDate).add(1, 'days').toDate();
    this.setState({ currentDate: nextDate});
    this.changeContent(nextDate);
  }

  today = () => {
    const today = this.props.currentDate;
    this.setState({ currentDate: today });
    this.changeContent(today);
  }

  changeContent(date) {
    this.state.calendar.map(dateObj => { 
      if(dateObj.date === moment(date).format('DD-MM-YYYY')) {
        let day = dateObj.day;
        let events = dateObj.events;
        this.props._onChangeDay(date, day, events)
        this.setState({ day : day })
        return day
      }
    })
  }

  initContent(calendar, date) {
    calendar.map(dateObj => { 
      if(dateObj.date === moment(date).format('DD-MM-YYYY')) {
        let day = dateObj.day;
        let events = dateObj.events;
        this.props._onChangeDay(date, day, events)
        this.setState({ day : day })
        return day
      }
    })
  }

  render() {
    return (
      <View style={styles.blockContainer}>
          <IconButton 
          name="ios-arrow-dropleft-circle"
          margin={0}
          size={20}
          color='gray'
          onPress={this.prevDate} />

          <TouchableOpacity
            onPress={this.today}>
            <View style={styles.todayContainer}>
              <Text style={styles.todayText}>{this.state.day}</Text>
              <Text style={styles.todayText}>{moment(this.state.currentDate).format("dddd")}</Text>
              <Text style={styles.todayText}>{moment(this.state.currentDate).format("MMM D")}</Text>
            </View>
          </TouchableOpacity>

          <IconButton 
          name="ios-arrow-dropright-circle"
          margin={0}
          size={20}
          color='gray'
          onPress={this.nextDate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    width: '100%',
    height: "7%",
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