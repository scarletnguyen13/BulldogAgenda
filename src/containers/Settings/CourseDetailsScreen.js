import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import BlueButton from '../../components/Buttons/BlueButton';
import TextField from '../../components/InputFields/TextField';
import TextArea from '../../components/InputFields/TextArea';
import ColorField from '../../components/InputFields/ColorField';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeName, changeRoom, changeTeacher, changeColor, changeNotes} from '../../actions/UserSettingsActions';

class CourseDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('courseInfo', 'ERROR').courseBlock,
    };
  };  

  constructor(props) {
    super(props);
    this.state = {
      isColorChooserVisible: false
    };

    this._toggleColorChooser = this._toggleColorChooser.bind(this);
  }

  _toggleColorChooser = () =>
    this.setState({ isColorChooserVisible: !this.state.isColorChooserVisible });

  render() {
    const { courseInfo } = this.props.navigation.state.params;

    return (
      <View style={styles.courseDetailsContainer}>
        <TextField
          placeholder="Course Name (e.g. Calculus 12)"
          _change={(block, courseName) => this.props.changeName(block, courseName)}
          block={courseInfo.courseBlock}
          value={courseInfo.courseName}
        />

        <TextField
          placeholder="Room (e.g. Room 109)"
          _change={(block, courseRoom) => this.props.changeRoom(block, courseRoom)}
          block={courseInfo.courseBlock}
          value={courseInfo.courseRoom}
        />

        <TextField
          placeholder="Teacher (e.g. Mr. Smith)"
          _change={(block, courseTeacher) => this.props.changeTeacher(block, courseTeacher)}
          block={courseInfo.courseBlock}
          value={courseInfo.courseTeacher}
        />

        <ColorField 
          _toggleColorChooser = {this._toggleColorChooser}
          isColorChooserVisible={this.state.isColorChooserVisible}
          _change={(block, courseColor) => this.props.changeColor(block, courseColor)}
          block={courseInfo.courseBlock}
          value={courseInfo.courseColor}
        />

        <TextArea
          placeholder="Additional Notes"
          _change={(block, courseNotes) => this.props.changeNotes(block, courseNotes)}
          block={courseInfo.courseBlock}
          value={courseInfo.courseNotes}
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

const mapStateToProps = (state) => {
  const { blocks } = state
  return { blocks }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeName,
    changeRoom,
    changeTeacher,
    changeColor,
    changeNotes
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsScreen);