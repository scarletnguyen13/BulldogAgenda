import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import BlueButton from '../components/BlueButton';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import ColorField from '../components/ColorField';

class CourseDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'ERROR'),
    };
  };  

  constructor(props) {
    super(props);
    this.state = {
      isColorChooserVisible: false
    };

    this._toggleColorChooser = this._toggleColorChooser.bind(this);
    this._changeName = this._changeName.bind(this);
    this._changeRoom = this._changeRoom.bind(this);
    this._changeTeacher = this._changeTeacher.bind(this);
    this._changeColor = this._changeColor.bind(this);
    this._changeNotes = this._changeNotes.bind(this);
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
          value={this.state.courseName}
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
