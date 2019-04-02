import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CheckBox from '../CheckBox';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import {  TODO_TYPES } from '../../constants/todoDefaults';
import { connect } from 'react-redux';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.item.check
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      check: !this.state.check 
    })
    this.props.onChange(this.props.item.id);
  }

  getColorByDate() {
    const dueDate = this.props.item.dueDate;
    const formattedDuedate = moment(dueDate).format('ddd, MMM DD');
    const tomorrow = moment(moment().add(1, 'days').toDate()).format('ddd, MMM DD');
    const isTomorrow = (tomorrow === formattedDuedate)
    if (moment(dueDate).isBefore(moment())) {
      return 'red'
    } else if (moment(dueDate).isSame(moment()) || isTomorrow) {
      return '#ff6b00'
    } else {
      return 'black'
    }
  }

  render() {
    const values = Object.values(this.props.blocks);
    let COURSES = [] 
    values.forEach(blockObj => {
      COURSES.push({
        name: blockObj.courseName,
        color: blockObj.courseColor
      });
    });

    const formattedDuedate = moment(this.props.item.dueDate).format('ddd, MMM DD');
    const tomorrow = moment(moment().add(1, 'days').toDate()).format('ddd, MMM DD');
    const today = moment().format('ddd, MMM DD');
    const isComingSoon = (tomorrow === formattedDuedate) || (today === formattedDuedate);
    const comingDateText = today === formattedDuedate ? 'Today' : 'Tomorrow'

    return (
      <View style={styles.outerContainer}>
        <View style={[styles.indicator, {backgroundColor: COURSES[this.props.item.course].color}]}></View>
        <CheckBox
          handleClick={this.handleClick}
          boxImage={this.state.check ? 
            <Icon name='ios-square-outline' size={32} color='black'/> 
            : 
            <Icon name='ios-checkbox' size={26} color='green'/>}/>
        <TouchableOpacity 
          style={styles.content}
          onPress={() => {this.props.navigation.navigate('TodoDetails', {
            todoInfo: this.props.item
          })}}>
          <View style={styles.textContainer}>
            <View style={{width: '60%'}}><Text style={crossedText(this.state.check)}>{this.props.item.description}</Text></View>
            <Text style={[{color: this.getColorByDate()}, crossedText(this.state.check)]}>{isComingSoon ? comingDateText : formattedDuedate}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.courseAndTypeTextColor, crossedText(this.state.check)]}>{COURSES[this.props.item.course].name}</Text>
            <Text style={[styles.courseAndTypeTextColor, crossedText(this.state.check)]}>{TODO_TYPES[this.props.item.type]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  indicator: {
    width: '2%',
    height: '80%'
  },
  content: {
    width: '85%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f0f0f0'
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    marginTop: 2
  },
  courseAndTypeTextColor: {
    color: '#6f6f6f'
  }
});

function crossedText(bool) {
  if (bool) {
    return ({
      textDecorationLine: 'none'
    });
  } else {
    return ({
      textDecorationLine: 'line-through',
      color: 'black'
    });
  }
}

const mapStateToProps = (state) => {
  const { todos, blocks } = state
  return { todos, blocks }
};

export default connect(mapStateToProps)(withNavigation(TodoItem));
