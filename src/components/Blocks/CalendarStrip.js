import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconButton from '../Buttons/IconButton';
import moment from 'moment';

class CalendarStrip extends Component {
  render() {
    return (
      <View style={styles.blockContainer}>
          <IconButton 
          name="ios-arrow-dropleft-circle"
          margin={0}
          size={20}
          color='gray' />

          <Text style={styles.todayText}>DAY 1</Text>
          <Text style={styles.todayText}>{moment(this.props.currentDate).format("dddd")}</Text>
          <Text style={styles.todayText}>{moment(this.props.currentDate).format("MMM D")}</Text>

          <IconButton 
          name="ios-arrow-dropright-circle"
          margin={0}
          size={20}
          color='gray' />
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
  todayText: {
    fontSize: 14,
    textTransform: 'uppercase'
  },
});

export default CalendarStrip;