import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import BlockButton from '../components/Buttons/BlockButton';
import NextButton from '../components/Buttons/NextButton';
import DayText from '../components/Texts/DayText';
import { connect } from 'react-redux';

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
                courseInfo={this.props.blocks.block1_1}/>

              <BlockButton 
                courseInfo={this.props.blocks.block1_2}/>
            </View>

            <View style={styles.rowView}>
              <BlockButton 
                courseInfo={this.props.blocks.block1_3}/>

              <BlockButton 
                courseInfo={this.props.blocks.block1_4}/>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <DayText day="Day 2"/>

          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <BlockButton 
                courseInfo={this.props.blocks.block2_1}/>

              <BlockButton 
                courseInfo={this.props.blocks.block2_2}/>
            </View>

            <View style={styles.rowView}>
              <BlockButton 
                courseInfo={this.props.blocks.block2_3}/>
              
              <BlockButton 
                courseInfo={this.props.blocks.block2_4}/>
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

const mapStateToProps = (state) => {
  const { blocks } = state
  return { blocks }
};

export default connect(mapStateToProps)(SettingsScreen);
