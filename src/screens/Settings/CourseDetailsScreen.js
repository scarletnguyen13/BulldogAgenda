/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlueButton from '../../components/Buttons/BlueButton';
import TextField from '../../components/InputFields/TextField';
import TextArea from '../../components/InputFields/TextArea';
import ColorField from '../../components/InputFields/ColorField';

import {
  changeName, changeRoom, changeTeacher, changeColor, changeNotes
} from '../../actions/UserSettingsActions';

class CourseDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('courseInfo', 'ERROR').courseBlock,
  });

  constructor(props) {
    super(props);
    this.state = {
      isColorChooserVisible: false
    };

    this._toggleColorChooser = this._toggleColorChooser.bind(this);
  }

  _toggleColorChooser = () => {
    const { isColorChooserVisible } = this.state;
    this.setState({ isColorChooserVisible: !isColorChooserVisible });
  }

  render() {
    const { navigation } = this.props;
    const { courseInfo } = navigation.state.params;

    return (
      <ScrollView>
        <View style={styles.courseDetailsContainer}>
          <TextField
            label="Course"
            placeholder="e.g. Calculus 12"
            _change={(block, courseName) => this.props.changeName(block, courseName)}
            block={courseInfo.courseBlock}
            value={courseInfo.courseName}
          />

          <TextField
            label="Room"
            placeholder="e.g. Rm. 109"
            _change={(block, courseRoom) => this.props.changeRoom(block, courseRoom)}
            block={courseInfo.courseBlock}
            value={courseInfo.courseRoom}
          />

          <TextField
            label="Teacher"
            placeholder="e.g. Mr. Smith"
            _change={(block, courseTeacher) => this.props.changeTeacher(block, courseTeacher)}
            block={courseInfo.courseBlock}
            value={courseInfo.courseTeacher}
          />

          <ColorField
            label="Color"
            _toggleColorChooser={this._toggleColorChooser}
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
            routeName="Settings"
            width={70}
            height={50}
            margin={25}
            content="DONE"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  courseDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
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
  const { blocks } = state;
  return { blocks };
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
