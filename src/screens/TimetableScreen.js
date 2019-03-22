import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TimetableDailyBlock from '../components/TimetableDailyBlock';

class TimetableScreen extends Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        <View style={{width: '100%', height: "10%", backgroundColor: '#dbdbdb', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingRight: 30, paddingLeft: 30}}>
            <Text>DAY 1</Text>
            <Text>MONDAY</Text>
            <Text>FEB 17</Text>
        </View>
        <View style={{width: '100%', height: '90%', flexDirection: 'column'}}>
          <TimetableDailyBlock 
            courseColor='#F44336'
            flex={1}
            courseBlock='1 - 1'
            courseName='Physics 12'
            courseRoom='Rm. 109'/>

          <TimetableDailyBlock 
            courseColor='#E91E63'
            flex={1}
            courseBlock='1 - 1'
            courseName='Physics 12'
            courseRoom='Rm. 109'/>

          <TimetableDailyBlock 
            courseColor='#3E3E3E'
            flex={0.6}
            courseBlock='LUNCH'/>

          <TimetableDailyBlock 
            courseColor='#9C27B0'
            flex={1}
            courseBlock='1 - 1'
            courseName='Physics 12'
            courseRoom='Rm. 109'/>

          <TimetableDailyBlock 
            courseColor='#673AB7'
            flex={1}
            courseBlock='1 - 1'
            courseName='Physics 12'
            courseRoom='Rm. 109'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center", 
    // justifyContent: "center"
  }
});

export default TimetableScreen;