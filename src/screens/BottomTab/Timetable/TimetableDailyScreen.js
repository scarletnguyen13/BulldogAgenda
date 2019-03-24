import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TimetableDailyBlock from '../../../components/Blocks/TimetableDailyBlock';
import CalendarStrip from '../../../components/Blocks/CalendarStrip';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
 
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

class TimetableDailyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment().toDate(),
      currentTime: moment().format('LTS')
    }
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

    return (
      <View style={styles.welcomeView}>
        <CalendarStrip 
          currentDate={this.state.currentDate}/>

        <ScrollView 
          style={styles.scrollStyle}>
          <TimetableDailyBlock 
            courseColor='#2196F3'
            height={COURSE_DEFAULT_HEIGHT}
            courseBlock='1 - 1'
            courseName="Physics 12"
            courseRoom='Rm. 109'
            isVisible={block_1_range.contains(todayCurrentTime)}/>

          <TimetableDailyBlock 
            courseColor='#3E3E3E'
            height={BREAK_DEFAULT_HEIGHT}
            courseBlock='BREAK'
            isVisible={break_range.contains(todayCurrentTime)}/>

          <TimetableDailyBlock 
            courseColor='#FFEB3B'
            height={COURSE_DEFAULT_HEIGHT}
            courseBlock='1 - 2'
            courseName='Calculus 12'
            courseRoom='Rm. 109'
            isVisible={block_2_range.contains(todayCurrentTime)}/>

          <TimetableDailyBlock 
            courseColor='#3E3E3E'
            height={LUNCH_DEFAULT_HEIGHT}
            courseBlock='LUNCH'
            isVisible={lunch_range.contains(todayCurrentTime)}/>

          <TimetableDailyBlock 
            courseColor='#8BC34A'
            height={COURSE_DEFAULT_HEIGHT}
            courseBlock='1 - 3'
            courseName='Chemistry 12'
            courseRoom='Rm. 109'
            isVisible={block_3_range.contains(todayCurrentTime)}/>

          <TimetableDailyBlock 
            courseColor='#E91E63'
            height={COURSE_DEFAULT_HEIGHT}
            courseBlock='1 - 4'
            courseName='English 12'
            courseRoom='Rm. 109'
            isVisible={block_4_range.contains(todayCurrentTime)}/>
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
  }
});

export default TimetableDailyScreen;