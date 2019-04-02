import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import CollapsibleView from '../../../components/CollapsibleView';
import CalendarStrip from '../../../components/CalendarStrip';
import CalendarEventItem from '../../../components/Items/CalendarEventItem';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { connect } from 'react-redux';
import * as DailyConstants from '../../../constants/dailyConstants';
 
const moment = extendMoment(Moment)

class TimetableDailyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment().toDate(),
      currentDate: moment().toDate(),
      currentTime: moment().format('LTS'),
      day: '',
      events: []
    }
    this._onChangeDay = this._onChangeDay.bind(this);
  }

  _onChangeDay = (date, day, events) => {
    this.setState({
      currentDate: date,
      day: day,
      events: events
    })
  }


  componentDidMount() {
    setInterval( () => {
      this.setState({
        today: moment(new Date()),
        currentTime : moment(new Date()).format('LT')
      })
    }, 1000)
  }

  render() {
    const today = moment(this.state.today).format("MM/DD/YYYY");
    const block_1_range = moment.range(
      moment(today + DailyConstants.BLOCK_1_START), 
      moment(today + DailyConstants.BLOCK_1_END)
    );
    const break_range = moment.range(
      moment(today + DailyConstants.BREAK_START), 
      moment(today + DailyConstants.BREAK_END)
    );
    const block_2_range = moment.range(
      moment(today + DailyConstants.BLOCK_2_START), 
      moment(today + DailyConstants.BLOCK_2_END)
    );
    const lunch_range = moment.range(
      moment(today + DailyConstants.LUNCH_START), 
      moment(today + DailyConstants.LUNCH_END)
    );
    const block_3_range = moment.range(
      moment(today + DailyConstants.BLOCK_3_START), 
      moment(today + DailyConstants.BLOCK_3_END)
    );
    const block_4_range = moment.range(
      moment(today + DailyConstants.BLOCK_4_START), 
      moment(today + DailyConstants.BLOCK_4_END)
    );

    const todayCurrentTime = moment(today + " " + this.state.currentTime);
    let block1, block2, block3, block4;

    const initRotationOrder = Object.values(this.props.blocks);
    const block_rotation = moment(this.state.currentDate).isBefore('2019-04-17') ? [1,0,3,2] : [3,2,1,0]

    if (this.state.day === 'Day 1') { 
      block1 = initRotationOrder[block_rotation[0]];
      block2 = initRotationOrder[block_rotation[1]];
      block3 = initRotationOrder[block_rotation[2]];
      block4 = initRotationOrder[block_rotation[3]];
    } else if (this.state.day === 'Day 2') {
      block1 = initRotationOrder[block_rotation[0] + 4];
      block2 = initRotationOrder[block_rotation[1] + 4];
      block3 = initRotationOrder[block_rotation[2] + 4];
      block4 = initRotationOrder[block_rotation[3] + 4];
    } else {
      block1 = DailyConstants.EMPTY_BLOCK;
      block2 = DailyConstants.EMPTY_BLOCK;
      block3 = DailyConstants.EMPTY_BLOCK;
      block4 = DailyConstants.EMPTY_BLOCK;
    }
    
    const isSchoolDay = this.state.day === 'Day 1' || this.state.day === 'Day 2';

    const values = Object.values(this.props.blocks);
    let COURSES = [] 
    values.forEach(blockObj => {
      COURSES.push(blockObj.courseName);
    });

    return (
      <View style={styles.welcomeView}>
        <CalendarStrip 
          today={this.state.today}
          _onChangeDay={(date, day, events) => this._onChangeDay(date, day, events)}/>
        
        <ScrollView 
          style={styles.scrollStyle}>
          
          {(this.state.events.length > 0) && 
          <View style={styles.eventsContainer}>
            <FlatList
              data={this.state.events}
              renderItem={({ item }) => (
                <Text style={styles.eventsText}>{this.state.events.length > 1 && <Text>•</Text>} {item}</Text>
              )}
              keyExtractor={item => item}
            />
          </View>}
          
          {!isSchoolDay && 
          <View style={styles.noClassesContainer}>
            <Icon name="ios-school" size={105} color='#bbbbbb' />
            <Text style={styles.noClassesText}>No Classes</Text>
          </View>}

          {(isSchoolDay) &&
          <View>
            <CollapsibleView 
              courseColor={block1.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block1.courseBlock}
              courseName={block1.courseName}
              courseRoom={block1.courseRoom}
              isVisible={block_1_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children = {
                this.props.todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(this.state.currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block1.courseName) {
                    return (
                      <CalendarEventItem key={todo.id} courseColor={block1.courseColor} content={todo.description} completed={todo.check}/>
                    )
                  } else {
                    return null;
                  }
                })
              }/>

            <CollapsibleView 
              courseColor='#3E3E3E'
              height={DailyConstants.BREAK_DEFAULT_HEIGHT}
              courseBlock='BREAK'
              isVisible={break_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={<View/>}/>

            <CollapsibleView 
              courseColor={block2.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block2.courseBlock}
              courseName={block2.courseName}
              courseRoom={block2.courseRoom}
              isVisible={block_2_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={
                this.props.todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(this.state.currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block2.courseName) {
                    return (
                      <CalendarEventItem key={todo.id} courseColor={block2.courseColor} content={todo.description} completed={todo.check}/>
                    )
                  } else {
                    return null;
                  }
                })
              }/>

            <CollapsibleView 
              courseColor='#3E3E3E'
              height={DailyConstants.LUNCH_DEFAULT_HEIGHT}
              courseBlock='LUNCH'
              isVisible={lunch_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={<View/>}/>

            <CollapsibleView 
              courseColor={block3.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block3.courseBlock}
              courseName={block3.courseName}
              courseRoom={block3.courseRoom}
              isVisible={block_3_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={
                this.props.todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(this.state.currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block3.courseName) {
                    return (
                      <CalendarEventItem key={todo.id} courseColor={block3.courseColor} content={todo.description} completed={todo.check}/>
                    )
                  } else {
                    return null;
                  }
                })
              }/>

            <CollapsibleView 
              courseColor={block4.courseColor}
              height={DailyConstants.COURSE_DEFAULT_HEIGHT}
              courseBlock={block4.courseBlock}
              courseName={block4.courseName}
              courseRoom={block4.courseRoom}
              isVisible={block_4_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={
                this.props.todos.todoList.map((todo) => {
                  if (moment(todo.dueDate).format('DD-MM-YYYY') === moment(this.state.currentDate).format('DD-MM-YYYY') && COURSES[todo.course] === block4.courseName) {
                    return (
                      <CalendarEventItem key={todo.id} courseColor={block4.courseColor} content={todo.description} completed={todo.check}/>
                    )
                  } else {
                    return null;
                  }
                })
              }/>
          </View>
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center", 
    justifyContent: "center"
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
  const { blocks, todos } = state
  return { blocks, todos }
};

export default connect(mapStateToProps)(TimetableDailyScreen);