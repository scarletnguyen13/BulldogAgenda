import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import IconButton from './Buttons/IconButton';
import moment from 'moment';
import { connect } from 'react-redux';

class CalendarStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: this.props.currentDate,
      day: ''
    }
    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
    this.today = this.today.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  componentDidMount() {
    this.changeContent(this.props.currentDate);
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
    this.props.calendar.calendar.map(dateObj => { 
      if(dateObj.date === moment(date).format('DD-MM-YYYY')) {
        let day = JSON.stringify(dateObj.day).replace(/\"/g, "");
        this.props._onChangeDay(day)
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

const mapStateToProps = (state) => {
  const { calendar } = state
  return { calendar }
};

export default connect(mapStateToProps)(CalendarStrip);