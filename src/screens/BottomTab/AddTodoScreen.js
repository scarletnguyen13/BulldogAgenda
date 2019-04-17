/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Text
} from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TODO_TYPES, PRIORITY_TYPES, REMINDER_TYPES } from '../../constants/todoDefaults';
import CloseButton from '../../components/Buttons/CloseButton';
import { addTodo, removeTodo } from '../../actions/TodoActions';

function randomNumGenerator() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

class AddTodoScreen extends Component {
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

  constructor(props) {
    super(props);

    const { todoInfo } = props.navigation.state.params;

    this.state = {
      id: todoInfo.id,
      description: todoInfo.description,
      selectedCourse: todoInfo.course,
      selectedTodoType: todoInfo.type,
      isCalendarVisible: false,
      selectedDate: todoInfo.dueDate,
      selectedTime: todoInfo.dueTime,
      selectedPriority: todoInfo.priority,
      selectedReminder: todoInfo.reminder,
      additionalNotes: todoInfo.additionalNotes,
      check: todoInfo.check
    };
    this._toggleCalendar = this._toggleCalendar.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setAdditionalNotes = this.setAdditionalNotes.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selectedDate: day.dateString
    });
  }

  setTime(newTime) {
    this.setState({ selectedTime: newTime });
  }

  setDescription(newDescription) {
    this.setState({ description: newDescription });
  }

  setAdditionalNotes(newNotes) {
    this.setState({ additionalNotes: newNotes });
  }

  _toggleCalendar = () => {
    const { isCalendarVisible } = this.state;
    this.setState({ isCalendarVisible: !isCalendarVisible });
  }

  render() {
    const { blocks, navigation } = this.props;
    const {
      id,
      description,
      selectedCourse,
      selectedTodoType,
      isCalendarVisible,
      selectedDate,
      selectedTime,
      selectedPriority,
      selectedReminder,
      additionalNotes,
      check
    } = this.state;
    const values = Object.values(blocks);
    const COURSES = [];
    values.forEach((blockObj) => {
      COURSES.push(blockObj.courseName);
    });

    return (
      <ScrollView>
        <View style={styles.todoDetailsContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Homework Description"
            onChangeText={this.setDescription}
            value={description}
          />

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => { this.coursePicker.show(); }}
          >
            <View pointerEvents="none">
              <TextInput
                style={styles.textInputStyle}
                placeholder="Course"
                value={COURSES[selectedCourse]}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={(e) => { this.coursePicker = e; }}
            value={selectedCourse}
            title="Select Course"
            items={COURSES}
            onValueChange={(index) => {
              this.setState({
                selectedCourse: index
              });
            }}
          />

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => { this.todoTypePicker.show(); }}
          >
            <View pointerEvents="none">
              <TextInput
                style={styles.textInputStyle}
                placeholder="Type"
                value={TODO_TYPES[selectedTodoType]}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={(e) => { this.todoTypePicker = e; }}
            value={selectedTodoType}
            title="Select Todo Type"
            items={TODO_TYPES}
            onValueChange={(index) => {
              this.setState({
                selectedTodoType: index
              });
            }}
          />

          <TouchableOpacity style={styles.TouchableOpacity} onPress={this._toggleCalendar}>
            <View pointerEvents="none">
              <TextInput
                style={[styles.textInputStyle, styles.dueDate]}
                placeholder="Due Date & Time"
                value={`Due: ${moment(selectedDate).format('dddd, MMM DD')} | ${selectedTime === undefined ? moment(new Date()).format('LT') : selectedTime}`}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <Modal
            isVisible={isCalendarVisible}
            style={styles.modal}
          >
            <View style={styles.calendarContainer}>
              <View style={styles.closeButtonContainer}>
                <CloseButton
                  _toggle={this._toggleCalendar}
                  marginLeft="85%"
                  marginTop={30}
                />
              </View>
              <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                hideExtraDays
                markedDates={{ [selectedDate]: { selected: true } }}
              />
              <DatePicker date={selectedTime} mode="time" style={styles.timePicker} onDateChange={time => this.setTime(time)} confirmBtnText="Confirm" cancelBtnText="Cancel" />
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => { this.priorityePicker.show(); }}
          >
            <View pointerEvents="none">
              <TextInput
                style={styles.textInputStyle}
                placeholder="Priority"
                value={PRIORITY_TYPES[selectedPriority]}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={(e) => { this.priorityePicker = e; }}
            value={selectedPriority}
            title="Select Priority"
            items={PRIORITY_TYPES}
            onValueChange={(index) => {
              this.setState({
                selectedPriority: index
              });
            }}
          />

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => { this.reminderPicker.show(); }}
          >
            <View pointerEvents="none">
              <TextInput
                style={styles.textInputStyle}
                placeholder="Reminder"
                value={REMINDER_TYPES[selectedReminder]}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
          </TouchableOpacity>

          <ReactNativePickerModule
            pickerRef={(e) => { this.reminderPicker = e; }}
            value={selectedReminder}
            title="Select Reminder"
            items={REMINDER_TYPES}
            onValueChange={(index) => {
              this.setState({
                selectedReminder: index
              });
            }}
          />

          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              placeholder="Additional Notes"
              numberOfLines={10}
              multiline
              onChangeText={this.setAdditionalNotes}
              value={additionalNotes}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              if (description.length > 0 && selectedCourse > -1 && selectedTodoType > -1) {
                // eslint-disable-next-line react/destructuring-assignment
                this.props.addTodo({
                  id: id === null ? randomNumGenerator() : id,
                  description,
                  course: selectedCourse,
                  type: selectedTodoType,
                  dueDate: selectedDate,
                  dueTime: selectedTime,
                  priority: selectedPriority,
                  reminder: selectedReminder,
                  additionalNotes,
                  check: check === null ? true : check
                });
                navigation.navigate('Agenda');
              }
            }}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>OK</Text>
            </View>
          </TouchableOpacity>

          {(id !== null)
          && (
          <TouchableOpacity
            style={styles.removeButtonOpacityContainer}
            onPress={() => {
              // eslint-disable-next-line react/destructuring-assignment
              this.props.removeTodo(id);
              navigation.navigate('Agenda');
            }}
          >
            <View style={styles.removeButton}>
              <Icon name="ios-trash" size={30} color="red" />
              <Text style={styles.removeButtonText}>REMOVE</Text>
            </View>
          </TouchableOpacity>
          )}

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
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendarContainer: {
    width: 320,
    height: 450,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '90%',
    justifyContent: 'center',
    marginBottom: '18%'
  },
  textAreaContainer: {
    width: '80%',
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginTop: 10
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start'
  },
  addButton: {
    width: 70,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#140bb9',
    margin: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    fontSize: 16,
    color: 'white'
  },
  removeButtonOpacityContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffc1c1'
  },
  removeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  removeButtonText: {
    marginLeft: 5, color: 'red'
  }
});

const mapStateToProps = (state) => {
  const { todos, blocks } = state;
  return { todos, blocks };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTodo,
    removeTodo
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoScreen);
