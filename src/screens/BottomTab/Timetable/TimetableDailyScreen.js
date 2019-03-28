import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, List } from 'react-native';
import CollapsibleView from '../../../components/CollapsibleView';
import CalendarStrip from '../../../components/CalendarStrip';
import CalendarBlock from '../../../components/Items/CalendarEventItem';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { connect } from 'react-redux';
 
const moment = extendMoment(Moment)

const COURSE_DEFAULT_HEIGHT = 105;
const LUNCH_DEFAULT_HEIGHT = 80;
const BREAK_DEFAULT_HEIGHT = 55;

const block1StartTime = " 8:35 AM";
const block1EndTime   = " 10:00 AM";

const breakStartTime  = " 10:01 AM";
const breakEndTime    = " 10:15 AM";

const block2StartTime = " 10:16 AM";
const block2EndTime   = " 11:35 AM";

const lunchStartTime  = " 11:36 AM";
const lunchEndTime    = " 12:15 PM";

const block3StartTime = " 12:16 PM";
const block3EndTime   = " 1:38 PM";

const block4StartTime = " 1:39 PM";
const block4EndTime   = " 3:03 PM";

const children = (
  <View>
    <CalendarBlock courseColor = '#8BC34A'/>
    <CalendarBlock courseColor = '#E91E63'/>
    <CalendarBlock courseColor = '#FFEB3B'/>
  </View>
)

class TimetableDailyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment().toDate(),
      currentTime: moment().format('LTS'),
      day: '',
      events: []
    }
    this._onChangeDay = this._onChangeDay.bind(this);
  }

  _onChangeDay = (day, events) => {
    this.setState({
      day: day,
      events: events
    })
  }


  componentDidMount() {
    setInterval( () => {
      this.setState({
        currentDate: moment(new Date()),
        currentTime : moment(new Date()).format('LT')
      })
    }, 1000)
  }

  render() {
    const today = moment(this.state.currentDate).format("MM/DD/YYYY");
    const block_1_range = moment.range(
      moment(today + block1StartTime), 
      moment(today + block1EndTime)
    );
    const break_range = moment.range(
      moment(today + breakStartTime), 
      moment(today + breakEndTime)
    );
    const block_2_range = moment.range(
      moment(today + block2StartTime), 
      moment(today + block2EndTime)
    );
    const lunch_range = moment.range(
      moment(today + lunchStartTime), 
      moment(today + lunchEndTime)
    );
    const block_3_range = moment.range(
      moment(today + block3StartTime), 
      moment(today + block3EndTime)
    );
    const block_4_range = moment.range(
      moment(today + block4StartTime), 
      moment(today + block4EndTime)
    );

    const todayCurrentTime = moment(today + " " + this.state.currentTime);

    let block1, block2, block3, block4;
    const emptyBlock = {
      courseBlock: '', courseName: '', courseRoom: '', 
      courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
    }
    if (this.state.day === 'Day 1') { 
      block1 = this.props.blocks.block1_1;
      block2 = this.props.blocks.block1_2;
      block3 = this.props.blocks.block1_3;
      block4 = this.props.blocks.block1_4;
    } else if (this.state.day === 'Day 2') {
      block1 = this.props.blocks.block2_1;
      block2 = this.props.blocks.block2_2;
      block3 = this.props.blocks.block2_3;
      block4 = this.props.blocks.block2_4;
    } else {
      block1 = emptyBlock;
      block2 = emptyBlock;
      block3 = emptyBlock;
      block4 = emptyBlock;
    }
    
    const isSchoolDay = this.state.day === 'Day 1' || this.state.day === 'Day 2';

    return (
      <View style={styles.welcomeView}>
        <CalendarStrip 
          currentDate={this.state.currentDate}
          _onChangeDay={(day, events) => this._onChangeDay(day, events)}/>
        
        <ScrollView 
          style={styles.scrollStyle} scrollEnabled={isSchoolDay}>
          
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
              height={COURSE_DEFAULT_HEIGHT}
              courseBlock={block1.courseBlock}
              courseName={block1.courseName}
              courseRoom={block1.courseRoom}
              isVisible={block_1_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={children}/>

            <CollapsibleView 
              courseColor='#3E3E3E'
              height={BREAK_DEFAULT_HEIGHT}
              courseBlock='BREAK'
              isVisible={break_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={children}/>

            <CollapsibleView 
              courseColor={block2.courseColor}
              height={COURSE_DEFAULT_HEIGHT}
              courseBlock={block2.courseBlock}
              courseName={block2.courseName}
              courseRoom={block2.courseRoom}
              isVisible={block_2_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={children}/>

            <CollapsibleView 
              courseColor='#3E3E3E'
              height={LUNCH_DEFAULT_HEIGHT}
              courseBlock='LUNCH'
              isVisible={lunch_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={children}/>

            <CollapsibleView 
              courseColor={block3.courseColor}
              height={COURSE_DEFAULT_HEIGHT}
              courseBlock={block3.courseBlock}
              courseName={block3.courseName}
              courseRoom={block3.courseRoom}
              isVisible={block_3_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={children}/>

            <CollapsibleView 
              courseColor={block4.courseColor}
              height={COURSE_DEFAULT_HEIGHT}
              courseBlock={block4.courseBlock}
              courseName={block4.courseName}
              courseRoom={block4.courseRoom}
              isVisible={block_4_range.contains(todayCurrentTime)}
              expand={true}
              borderWidth={10}
              children={children}/>
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
    borderColor: '#ff778e',
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
  const { blocks } = state
  return { blocks }
};

export default connect(mapStateToProps)(TimetableDailyScreen);