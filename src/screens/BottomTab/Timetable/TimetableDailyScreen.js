/* eslint-disable react/no-children-prop */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, Text, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { connect } from 'react-redux';
import CalendarEventItem from '../../../components/Items/CalendarEventItem';
import CalendarStrip from '../../../components/CalendarStrip';
import CollapsibleView from '../../../components/CollapsibleView';
import * as DailyConstants from '../../../constants/dailyConstants';

const moment = extendMoment(Moment);

class TimetableDailyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment().toDate(),
      currentDate: moment().toDate(),
      currentTime: moment().format('LTS'),
      day: '',
      events: []
    };
    this._onChangeDay = this._onChangeDay.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        today: moment(new Date()),
        currentTime: moment(new Date()).format('LT')
      });
    }, 1000);
  }

  _onChangeDay = (date, day, events) => {
    this.setState({
      currentDate: date,
      day,
      events
    });
  }

  render() {
    const {
      today, currentDate, currentTime, day, events
    } = this.state;
    const { blocks, todos } = this.props;
    const formattedToday = moment(today).format('MM/DD/YYYY');

    const block1Range = moment.range(
      moment(formattedToday + DailyConstants.BLOCK_1_START),
      moment(formattedToday + DailyConstants.BLOCK_1_END)
    );
    const breakRange = moment.range(
      moment(formattedToday + DailyConstants.BREAK_START),
      moment(formattedToday + DailyConstants.BREAK_END)
    );
    const block2Range = moment.range(
      moment(formattedToday + DailyConstants.BLOCK_2_START),
      moment(formattedToday + DailyConstants.BLOCK_2_END)
    );
    const lunchRange = moment.range(
      moment(formattedToday + DailyConstants.LUNCH_START),
      moment(formattedToday + DailyConstants.LUNCH_END)
    );
    const block3Range = moment.range(
      moment(formattedToday + DailyConstants.BLOCK_3_START),
      moment(formattedToday + DailyConstants.BLOCK_3_END)
    );
    const block4Range = moment.range(
      moment(formattedToday + DailyConstants.BLOCK_4_START),
      moment(formattedToday + DailyConstants.BLOCK_4_END)
    );

    const todayCurrentTime = moment(`${formattedToday} ${currentTime}`);
    let block1; let block2; let block3; let block4;

    const initRotationOrder = Object.values(blocks);
    const blockRotation = moment(currentDate).isBefore('2019-04-17') ? [1, 0, 3, 2] : [3, 2, 1, 0];

    if (day === 'Day 1') {
      block1 = initRotationOrder[blockRotation[0]];
      block2 = initRotationOrder[blockRotation[1]];
      block3 = initRotationOrder[blockRotation[2]];
      block4 = initRotationOrder[blockRotation[3]];
    } else if (day === 'Day 2') {
      block1 = initRotationOrder[blockRotation[0] + 4];
      block2 = initRotationOrder[blockRotation[1] + 4];
      block3 = initRotationOrder[blockRotation[2] + 4];
      block4 = initRotationOrder[blockRotation[3] + 4];
    } else {
      block1 = DailyConstants.EMPTY_BLOCK;
      block2 = DailyConstants.EMPTY_BLOCK;
      block3 = DailyConstants.EMPTY_BLOCK;
      block4 = DailyConstants.EMPTY_BLOCK;
    }

    const isSchoolDay = day === 'Day 1' || day === 'Day 2';

    const values = Object.values(blocks);
    const COURSES = [];
    values.forEach((blockObj) => {
      COURSES.push(blockObj.courseName);
    });

    return (
      <View style={styles.welcomeView}>
        <CalendarStrip
          today={today}
          _onChangeDay={(date, formattedDay, formattedEvents) => {
            this._onChangeDay(date, formattedDay, formattedEvents);
          }}
        />

        <ScrollView style={styles.scrollStyle}>
          {(events.length > 0)
          && (
          <View style={styles.eventsContainer}>
            <FlatList
              data={events}
              renderItem={({ item }) => (
                <Text style={styles.eventsText}>
                  {events.length > 1 && <Text>• </Text>}
                  {item}
                </Text>
              )}
              keyExtractor={item => item}
            />
          </View>
          )}

          {!isSchoolDay
          && (
          <View style={styles.noClassesContainer}>
            <Icon name="ios-school" size={105} color="#bbbbbb" />
            <Text style={styles.noClassesText}>No Classes</Text>
          </View>
          )}

          {(isSchoolDay) && (
          <View>
            <CollapsibleView
              courseColor={block1.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block1.courseBlock}
              courseName={block1.courseName}
              courseRoom={block1.courseRoom}
              isVisible={block1Range.contains(todayCurrentTime)}
              expand
              borderWidth={10}
              children={
                todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block1.courseName) {
                    return (
                      <CalendarEventItem
                        key={todo.id}
                        courseColor={block1.courseColor}
                        content={todo.description}
                        completed={todo.check}
                      />
                    );
                  }
                  return null;
                })
              }
            />

            <CollapsibleView
              courseColor="#3E3E3E"
              height={DailyConstants.BREAK_DEFAULT_HEIGHT}
              courseBlock="BREAK"
              isVisible={breakRange.contains(todayCurrentTime)}
              expand
              borderWidth={10}
              children={<View />}
            />

            <CollapsibleView
              courseColor={block2.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block2.courseBlock}
              courseName={block2.courseName}
              courseRoom={block2.courseRoom}
              isVisible={block2Range.contains(todayCurrentTime)}
              expand
              borderWidth={10}
              children={
                todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block2.courseName) {
                    return (
                      <CalendarEventItem
                        key={todo.id}
                        courseColor={block2.courseColor}
                        content={todo.description}
                        completed={todo.check}
                      />
                    );
                  }
                  return null;
                })
              }
            />

            <CollapsibleView
              courseColor="#3E3E3E"
              height={DailyConstants.LUNCH_DEFAULT_HEIGHT}
              courseBlock="LUNCH"
              isVisible={lunchRange.contains(todayCurrentTime)}
              expand
              borderWidth={10}
              children={<View />}
            />

            <CollapsibleView
              courseColor={block3.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block3.courseBlock}
              courseName={block3.courseName}
              courseRoom={block3.courseRoom}
              isVisible={block3Range.contains(todayCurrentTime)}
              expand
              borderWidth={10}
              children={
                todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block3.courseName) {
                    return (
                      <CalendarEventItem
                        key={todo.id}
                        courseColor={block3.courseColor}
                        content={todo.description}
                        completed={todo.check}
                      />
                    );
                  }
                  return null;
                })
              }
            />

            <CollapsibleView
              courseColor={block4.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block4.courseBlock}
              courseName={block4.courseName}
              courseRoom={block4.courseRoom}
              isVisible={block4Range.contains(todayCurrentTime)}
              expand
              borderWidth={10}
              children={
                todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block4.courseName) {
                    return (
                      <CalendarEventItem
                        key={todo.id}
                        courseColor={block4.courseColor}
                        content={todo.description}
                        completed={todo.check}
                      />
                    );
                  }
                  return null;
                })
              }
            />
          </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollStyle: {
    width: '100%'
  },
  scrollContentStyle: {
    height: '100%'
  },
  eventsContainer: {
    width: '100%',
    backgroundColor: '#ffccdf',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'red',
    marginBottom: 0.5
  },
  eventsText: {
    paddingTop: 8,
    paddingBottom: 8
  },
  noClassesContainer: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noClassesText: {
    color: '#bbbbbb',
    fontSize: 20
  }
});

const mapStateToProps = (state) => {
  const { blocks, todos } = state;
  return { blocks, todos };
};

export default connect(mapStateToProps)(TimetableDailyScreen);
