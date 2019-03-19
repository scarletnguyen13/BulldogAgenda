import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

class CourseDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'ERROR'),
    };
  };  

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.courseDetailsContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Class Name"
          onChangeText={(className) => this.setState({className: className})}
          value={this.state.className}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Room"
          onChangeText={(classRoom) => this.setState({classRoom: classRoom})}
          value={this.state.classRoom}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Teacher"
          onChangeText={(classTeacher) => this.setState({classTeacher: classTeacher})}
          value={this.state.classTeacher}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Settings')}
          style={styles.colorInputContainer}>
          <View pointerEvents='none'>
            <TextInput
              style={styles.colorTextInputStyle}
              placeholder="Color"
              onChangeText={(classColor) => this.setState({classColor: classColor})}
              value={this.state.classColor}
              editable={false} 
              selectTextOnFocus={false}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Additional Notes"
            numberOfLines={10}
            multiline={true}
            onChangeText={(classNotes) => this.setState({classNotes: classNotes})}
            value={this.state.classNotes}
          />
        </View>

        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Settings')}>
          <View style={styles.doneButton}>
              <Text style={styles.doneButtonText}>Done</Text>
          </View>
        </TouchableOpacity>
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
  },
  colorInputContainer: {
    width: "80%",  
    height: 40, 
    marginBottom: 40
  },
  colorTextInputStyle: {
    width: '100%', 
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 2, 
    marginBottom: 40
  },
  textAreaContainer: {
    width: '80%',
    borderBottomWidth: 2,
    paddingBottom: 10 
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  doneButton: {
    width: 70, 
    height: 50, 
    borderRadius: 10, 
    backgroundColor: '#140bb9', 
    margin: 55, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  doneButtonText: {
    fontSize: 16, 
    color: "white"
  }
});

export default CourseDetailsScreen;
