import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import BlueButton from '../components/BlueButton';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import ColorField from '../components/ColorField';

const courseNameKey = '@BulldogAgenda:courseName';
const courseRoomKey = '@BulldogAgenda:courseRoom';
const courseTeacherKey = '@BulldogAgenda:courseTeacher';
const courseColorKey = '@BulldogAgenda:courseColor';
const courseNotesKey = '@BulldogAgenda:courseNotes';

class CourseDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'ERROR'),
    };
  };  

  constructor(props) {
    super(props);
    this.state = {
      isColorChooserVisible: false,
      courseColor: '#FFF'
    };

    this._toggleColorChooser = this._toggleColorChooser.bind(this);
    this._changeName = this._changeName.bind(this);
    this._changeRoom = this._changeRoom.bind(this);
    this._changeTeacher = this._changeTeacher.bind(this);
    this._changeColor = this._changeColor.bind(this);
    this._changeNotes = this._changeNotes.bind(this);
  }

  componentWillMount() {
    this.onLoad();
  }

  onLoad = async () => {
    try {
      const storedValues = await AsyncStorage.multiGet([
        courseNameKey, 
        courseRoomKey, 
        courseTeacherKey, 
        courseColorKey, 
        courseNotesKey
      ]);
      this.setState({
        courseName: storedValues[0][1],
        courseRoom: storedValues[1][1],
        courseTeacher: storedValues[2][1],
        courseColor: storedValues[3][1],
        courseNotes: storedValues[4][1]
      });
    } catch (error) {
      Alert.alert('Error', 'There was an error while loading the data');
    }
  }

  onSave = async () => {
    let name = JSON.stringify(this.state.courseName);  
    let room = JSON.stringify(this.state.courseRoom);   
    let teacher = JSON.stringify(this.state.courseTeacher);
    let color = JSON.stringify(this.state.courseColor);
    let notes = JSON.stringify(this.state.courseNotes);
    try {
      await AsyncStorage.multiSet([
        [courseNameKey, name.substring(1, name.length-1)], 
        [courseRoomKey, room.substring(1, room.length-1)],
        [courseTeacherKey, teacher.substring(1, teacher.length-1)],
        [courseColorKey, color.substring(1, color.length-1)],
        [courseNotesKey, notes.substring(1, notes.length-1)]
      ]);
    } catch (error) {
      // Alert.alert('Error', 'There was an error while saving the data');
    }
  }

  _toggleColorChooser = () =>
    this.setState({ isColorChooserVisible: !this.state.isColorChooserVisible });

  _changeName = (newName) =>
  this.setState({ courseName: newName });

  _changeRoom = (newRoom) =>
  this.setState({ courseRoom: newRoom });

  _changeTeacher = (newTeacher) =>
  this.setState({ courseTeacher: newTeacher });
  
  _changeColor = (newColor) =>
  this.setState({ courseColor: newColor });

  _changeNotes = (newNotes) =>
  this.setState({ courseNotes: newNotes });

  render() {
    const { block, name, room, teacher, color, notes } = this.props.navigation.state.params;

    return (
      <View style={styles.courseDetailsContainer}>
        <TextField
          placeholder="Course Name"
          _change={(courseName) => this._changeName(courseName)}
          value={this.state.courseName}
        />

        <TextField
          placeholder="Room"
          _change={(courseRoom) => this._changeRoom(courseRoom)}
          value={this.state.courseRoom}
        />

        <TextField
          placeholder="Teacher"
          _change={(courseTeacher) => this._changeTeacher(courseTeacher)}
          value={this.state.courseTeacher}
        />

        <ColorField 
          _toggleColorChooser = {this._toggleColorChooser}
          isColorChooserVisible={this.state.isColorChooserVisible}
          _change={(courseColor) => this._changeColor(courseColor)}
          value={this.state.courseColor}
        />

        <TextArea
          placeholder="Additional Notes"
          _change={(courseNotes) => this._changeNotes(courseNotes)}
          value={this.state.courseNotes}
        />

        <BlueButton 
          routeName='Settings'
          functions={this.onSave()}
          width={70}
          height={50}
          margin={55}
          content='DONE'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  courseDetailsContainer: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  textInputStyle: {
    width: '80%', 
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 2, 
    marginBottom: 40
  }
});

export default CourseDetailsScreen;
