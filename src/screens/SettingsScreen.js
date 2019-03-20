import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import BlockButton from '../components/BlockButton';
import NextButton from '../components/NextButton';
import DayText from '../components/DayText';

class SettingsScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#140bb9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  }  

  render() {
    return (
      <View style={styles.settingsContainer}>
        <View style={styles.settingsContainer}>
          <DayText day="Day 1"/>
          
          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <BlockButton 
                routeName='CourseDetails1_1'
                block='1 - 1'/>

              <BlockButton 
                routeName='CourseDetails1_2'
                block='1 - 2'/>
            </View>

            <View style={styles.rowView}>
              <BlockButton 
                routeName='CourseDetails1_3'
                block='1 - 3'/>

              <BlockButton 
                routeName='CourseDetails1_4'
                block='1 - 4'/>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <DayText day="Day 2"/>

          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <BlockButton 
                routeName='CourseDetails2_1'
                block='2 - 1'/>

              <BlockButton 
                routeName='CourseDetails2_2'
                block='2 - 2'/>
            </View>

            <View style={styles.rowView}>
              <BlockButton 
                routeName='CourseDetails2_3'
                block='2 - 3'/>
              
              <BlockButton 
                routeName='CourseDetails2_4'
                block='2 - 4'/>
            </View>
          </View>
        </View>

        <NextButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
  },
  columnView: {
    flexDirection: 'column', 
    alignItems: "center", 
    justifyContent: "center"
  },
  rowView: {
    flexDirection: 'row', 
    alignItems: "center", 
    justifyContent: "center" 
  }
});

export default SettingsScreen;
