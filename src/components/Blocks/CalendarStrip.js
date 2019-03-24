import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import IconButton from '../Buttons/IconButton';
import moment from 'moment';

class CalendarStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: this.props.currentDate
    }
    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
    this.today = this.today.bind(this);
  }

  prevDate = () => {
    this.setState({ currentDate: moment(this.state.currentDate).subtract(1, 'days').toDate()});
  }

  nextDate = () => {
    this.setState({ currentDate: moment(this.state.currentDate).add(1, 'days').toDate()});
  }

  today = () => {
    this.setState({ currentDate: this.props.currentDate })
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
              <Text style={styles.todayText}>DAY 1</Text>
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