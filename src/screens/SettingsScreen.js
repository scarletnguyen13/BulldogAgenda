import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Images from '../../assets/images/index';

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
          <Text style={styles.dayText}>Day 1</Text>
          
          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('CourseDetails1_1', {
                  key: '1 - 1'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>1 - 1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('CourseDetails1_2', {
                  key: '1 - 2'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>1 - 2</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowView}>
              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('CourseDetails1_3', {
                  key: '1 - 3'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>1 - 3</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('CourseDetails1_4', {
                  key: '1 - 4'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>1 - 4</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.dayText}>Day 2</Text>

          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('CourseDetails2_1', {
                  key: '2 - 1'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>2 - 1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('CourseDetails2_2', {
                  key: '2 - 2'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>2 - 2</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowView}>
              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('CourseDetails2_3', {
                  key: '2 - 3'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>2 - 3</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => {this.props.navigation.navigate('CourseDetails2_4', {
                  key: '2 - 4'
                })}}>
                <View style={styles.blockButton}>
                  <Text style={styles.blockButtonText}>2 - 4</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.nextButtonView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}>
            <View style={styles.nextButton}>
              <Image 
                source={Images.icon.arrow}
                style={styles.nextButtonImage}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
  },
  dayText: {
    fontSize: 16, 
    margin: 40, 
    marginBottom: 30
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
  },
  blockButton: {
    width: 100, 
    height: 60, 
    borderRadius: 10, 
    backgroundColor: '#c6c3c3', 
    margin: 15, 
    marginBottom: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  blockButtonText: {
    fontSize: 16, 
    color: "black"
  },
  nextButtonView: {
    flex: 0.4, 
    alignItems: 'flex-end', 
    paddingRight: 20
  },
  nextButton: {
    width: 70, 
    height: 70, 
    borderRadius: 100, 
    backgroundColor: '#140bb9', 
    margin: 15,
    marginBottom: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  nextButtonImage: {
    width: 30, 
    height: 30
  }
});

export default SettingsScreen;
