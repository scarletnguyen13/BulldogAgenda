import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import IconButton from '../../../components/Buttons/IconButton';
import TimetableDailyBlock from '../../../components/Blocks/TimetableDailyBlock';

class TimetableDailyScreen extends Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        <View style={styles.blockContainer}>
            <IconButton 
            name="ios-arrow-dropleft-circle"
            margin={0}
            size={20}
            color='gray' />

            <Text style={styles.todayText}>DAY 1</Text>
            <Text style={styles.todayText}>MONDAY</Text>
            <Text style={styles.todayText}>FEB 17</Text>

            <IconButton 
            name="ios-arrow-dropright-circle"
            margin={0}
            size={20}
            color='gray' />
        </View>

        <ScrollView 
          style={styles.scrollStyle} 
          contentContainerStyle={styles.scrollContentStyle}>
          <TimetableDailyBlock 
            courseColor='#2196F3'
            flex={1}
            courseBlock='1 - 1'
            courseName='Physics 12'
            courseRoom='Rm. 109'
            isVisible={true}/>

          <TimetableDailyBlock 
            courseColor='#FFEB3B'
            flex={1}
            courseBlock='1 - 2'
            courseName='Calculus 12'
            courseRoom='Rm. 109'
            isVisible={false}/>

          <TimetableDailyBlock 
            courseColor='#3E3E3E'
            flex={0.6}
            courseBlock='LUNCH'
            isVisible={false}/>

          <TimetableDailyBlock 
            courseColor='#8BC34A'
            flex={1}
            courseBlock='1 - 3'
            courseName='Chemistry 12'
            courseRoom='Rm. 109'
            isVisible={false}/>

          <TimetableDailyBlock 
            courseColor='#E91E63'
            flex={1}
            courseBlock='1 - 4'
            courseName='English 12'
            courseRoom='Rm. 109'
            isVisible={false}/>
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
    fontSize: 14
  }, 
  scrollStyle: {
    width: '100%'
  },
  scrollContentStyle: {
    height: '100%'
  }
});

export default TimetableDailyScreen;