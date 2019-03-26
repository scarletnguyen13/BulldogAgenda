import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import BlueButton from '../../components/Buttons/BlueButton';
import TextArea from '../../components/InputFields/TextArea';
import { ScrollView } from "react-native-gesture-handler";

class AddTodoScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Todo"
    };
  };  

  render() {
    return (
      <ScrollView>
        <View style={styles.todoDetailsContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Homework Description"
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="Course"
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="Type"
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="Due Date"
          />  

          <TextInput
            style={styles.textInputStyle}
            placeholder="Due Time"
          /> 

          <TextInput
            style={styles.textInputStyle}
            placeholder="Priority"
          /> 

          <TextInput
            style={styles.textInputStyle}
            placeholder="Reminder"
          /> 

          <TextArea
            placeholder="Additional Notes"
            _change={() => {}}
          />

          <BlueButton 
            routeName='Main'
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
    marginBottom: 40
  }
});

export default AddTodoScreen;