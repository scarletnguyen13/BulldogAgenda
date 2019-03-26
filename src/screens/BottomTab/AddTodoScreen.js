import React, { Component } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView, DatePickerIOS } from "react-native";
import BlueButton from '../../components/Buttons/BlueButton';
import TextArea from '../../components/InputFields/TextArea';
import ReactNativePickerModule from 'react-native-picker-module';
import Modal from "react-native-modal";
import CloseButton from '../../components/Buttons/CloseButton';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

class AddTodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: null,
      courses: ['Physics 12',  'Chemistry 12', 'English 12', 'Calculus 12', 'Programming 11'],

      selectedTodoType: null,
      todoTypes: ['Homework', 'Assignment', 'Test', 'Quiz', 'Project', 'Exam', 'Lab', 'Paper', 'Presentation', 'Other'],

      isCalendarVisible: false,
      selectedDate: this.checkDefaultDaysLater(),
      selectedTime: moment(new Date()).format('LT'),

      selectedPriority: null,
      priorityTypes: ['High', 'Medium', 'Low'],

      selectedReminder: null,
      reminderTypes: ['When Due', '1 Hour Before', '2 Hours Before', 'Night Before', '1 Day Before', '2 Days Before',  '3 Day Before', '4 Days Before', '5 Day Before', '6 Days Before', '1 Week Before', '2 Weeks Before', '3 Weeks Before', 'Pick Date & Time',]
    }
    this._toggleCalendar = this._toggleCalendar.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  _toggleCalendar = () =>
  this.setState({ isCalendarVisible: !this.state.isCalendarVisible });

  onDayPress(day) {
    this.setState({
      selectedDate: day.dateString
    });
  }

  setTime(newTime) {
    this.setState({selectedTime: moment(newTime).format('LT')});
    console.log(this.state.selectedTime);
  }
  
  checkDefaultDaysLater() {
    const today = new Date()
    if (moment(today).format('dddd') === 'Friday') {
      return moment(moment(new Date()).add(4, 'days').toDate()).format("YYYY-MM-DD");
    }
    return moment(moment(new Date()).add(2, 'days').toDate()).format("YYYY-MM-DD");
  }
  
  static navigationOptions = {
    title: 'Add Todo',
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
      <ScrollView>
        <View style={styles.todoDetailsContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Homework Description"
          />
          
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {this.coursePicker.show()}}>
            <View pointerEvents='none'>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Course"
                value={this.state.courses[this.state.selectedCourse]}
                editable={false} 
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={e => this.coursePicker = e}
            value={this.state.selectedCourse}
            title={"Select Course"}
            items={this.state.courses}
            onValueChange={(index) => {
              this.setState({
                selectedCourse: index
              })
          }}/>

          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {this.todoTypePicker.show()}}>
            <View pointerEvents='none'>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Type"
                value={this.state.todoTypes[this.state.selectedTodoType]}
                editable={false} 
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={e => this.todoTypePicker = e}
            value={this.state.selectedTodoType}
            title={"Select Todo Type"}
            items={this.state.todoTypes}
            onValueChange={(index) => {
              this.setState({
                selectedTodoType: index
              })
          }}/>

          <TouchableOpacity style={styles.TouchableOpacity} onPress={this._toggleCalendar}>
            <View pointerEvents='none'> 
              <TextInput
                style={[styles.textInputStyle, styles.dueDate]}
                placeholder="Due Date & Time"
                value={"Due: " + moment(this.state.selectedDate).format('dddd, MMM DD') + " | " + this.state.selectedTime}
                editable={false} 
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <Modal 
            isVisible={this.state.isCalendarVisible}
            style={styles.modal}>
            <View style={styles.calendarContainer}>
              <View style={styles.closeButtonContainer}>
                <CloseButton
                  _toggle={this._toggleCalendar}
                  marginLeft='85%'
                  marginTop={15}
                />
              </View>
              <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                hideExtraDays
                markedDates={{[this.state.selectedDate]: {selected: true}}}
              />
              <DatePickerIOS date={new Date()} mode='time' style={styles.timePicker} onDateChange={this.setTime}/>
            </View>
          </Modal>

          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {this.priorityePicker.show()}}>
            <View pointerEvents='none'>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Priority"
                value={this.state.priorityTypes[this.state.selectedPriority]}
                editable={false} 
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={e => this.priorityePicker = e}
            value={this.state.selectedPriority}
            title={"Select Priority"}
            items={this.state.priorityTypes}
            onValueChange={(index) => {
              this.setState({
                selectedPriority: index
              })
          }}/>

          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {this.reminderPicker.show()}}>
            <View pointerEvents='none'>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Reminder"
                value={this.state.reminderTypes[this.state.selectedReminder]}
                editable={false} 
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={e => this.reminderPicker = e}
            value={this.state.selectedReminder}
            title={"Select Reminder"}
            items={this.state.reminderTypes}
            onValueChange={(index) => {
              this.setState({
                selectedReminder: index
              })
          }}/>

          <TextArea
            placeholder="Additional Notes"
            _change={() => {}}
          />

          <BlueButton 
            routeName='Agenda'
            width={70}
            height={50}
            margin={35}
            content='ADD'/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    width: '80%', 
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 2, 
    marginBottom: 40
  },
  todoDetailsContainer: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40
  },
  textInputStyle: {
    width: '80%', 
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 2, 
    marginBottom: 40,
  },
  dueDate: {
    color: '#ff6b00'
  },
  closeButtonContainer: {
    alignItems: 'flex-end', 
    flex: 1
  },
  modal: {
    alignItems: "center", 
    justifyContent: "center"
  },
  calendarContainer: {
    width: 320, 
    height: 620, 
    backgroundColor: 'white', 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 20
  },
  calendar: {
    borderWidth: 0,
    height: '67%',
    width: '100%',
    marginBottom: '10%',
    marginTop: '20%'
  },
  timePicker: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '18%'
  }
});

export default AddTodoScreen;