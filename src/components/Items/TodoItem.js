import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TODO_TYPES } from '../../constants/todoDefaults';
import CheckBox from '../CheckBox';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    this.state = {
      check: item.check
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getColorByDate() {
    const { item } = this.props;
    const { dueDate } = item;
    const formattedDuedate = moment(dueDate).format('ddd, MMM DD');
    const tomorrow = moment(moment().add(1, 'days').toDate()).format('ddd, MMM DD');
    const isTomorrow = (tomorrow === formattedDuedate);
    if (moment(dueDate).isBefore(moment())) {
      return 'red';
    }
    if (moment(dueDate).isSame(moment()) || isTomorrow) {
      return '#ff6b00';
    }
    return 'black';
  }

  handleClick = () => {
    const { onChange, item } = this.props;
    const { check } = this.state;
    this.setState({ check: !check });
    onChange(item.id);
  }

  render() {
    const { blocks, item, navigation } = this.props;
    const { check } = this.state;
    const values = Object.values(blocks);
    const COURSES = [];
    values.forEach((blockObj) => {
      COURSES.push({
        name: blockObj.courseName,
        color: blockObj.courseColor
      });
    });

    const formattedDuedate = moment(item.dueDate).format('ddd, MMM DD');
    const tomorrow = moment(moment().add(1, 'days').toDate()).format('ddd, MMM DD');
    const today = moment().format('ddd, MMM DD');
    const isComingSoon = (tomorrow === formattedDuedate) || (today === formattedDuedate);
    const comingDateText = today === formattedDuedate ? 'Today' : 'Tomorrow';

    return (
      <View style={styles.outerContainer}>
        <View style={[styles.indicator, { backgroundColor: COURSES[item.course].color }]} />
        <CheckBox
          handleClick={this.handleClick}
          boxImage={check ? <Icon name="ios-square-outline" size={32} color="black" /> : <Icon name="ios-checkbox" size={26} color="green" />}
        />
        <TouchableOpacity
          style={styles.content}
          onPress={() => { navigation.navigate('TodoDetails', { todoInfo: item }); }}
        >
          <View style={styles.textContainer}>
            <View style={{ width: '60%' }}><Text style={crossedText(check)}>{item.description}</Text></View>
            <Text style={[{ color: this.getColorByDate() }, crossedText(check)]}>
              {isComingSoon ? comingDateText : formattedDuedate}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.courseAndTypeTextColor, crossedText(check)]}>
              {COURSES[item.course].name}
            </Text>
            <Text style={[styles.courseAndTypeTextColor, crossedText(check)]}>
              {TODO_TYPES[item.type]}
            </Text>
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
  }
  return ({
    textDecorationLine: 'line-through',
    color: 'black'
  });
}

const mapStateToProps = (state) => {
  const { todos, blocks } = state;
  return { todos, blocks };
};

export default connect(mapStateToProps)(withNavigation(TodoItem));
