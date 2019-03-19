import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import Modal from "react-native-modal";
import { ColorPicker } from 'react-native-color-picker';
import Images from '../../assets/images/index';

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
      isColorPickerVisible: false
    };
  }

  _toggleColorChooser = () =>
    this.setState({ isColorChooserVisible: !this.state.isColorChooserVisible });

  _toggleColorPicker = () =>
  this.setState({ isColorPickerVisible: !this.state.isColorPickerVisible });

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

        <View style={styles.colorContainer}>
          <TouchableOpacity
            onPress={this._toggleColorChooser}
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
          
          <Modal 
            isVisible={this.state.isColorChooserVisible}
            style={styles.modal}>
            <View style={styles.coloChooserContainer}>
              <View style={styles.textAndCloseButtonRow}>
                <Text style={styles.chooseColorText}>Choose Color</Text>
                <View>
                  <TouchableOpacity onPress={this._toggleColorChooser}>
                    <View style={styles.closeButton1}>
                    <Image 
                      source={Images.icon.close}
                      style={styles.closeButtoneImage}/>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.blockColorColumn}>
                <View style={styles.blockColorRow}>
                  <View style={colorBlockStyle("#ff8282")}/>
                  <View style={colorBlockStyle("#a2ffa8")}/>
                  <View style={colorBlockStyle("#dda7ff")}/>
                </View>
                <View style={styles.blockColorRow}>
                  <View style={colorBlockStyle("#b8c3ff")}/>
                  <View style={colorBlockStyle("#ffc9f0")}/>
                  <View style={colorBlockStyle("#fff08b")}/>
                </View>
                <View style={styles.blockColorRow}>
                  <View style={colorBlockStyle("#ffcc91")}/>
                  <View style={colorBlockStyle("#9ef9ff")}/>
                  <TouchableOpacity onPress={this._toggleColorPicker}>
                    <View style={styles.addButton}>
                      <Image 
                        source={Images.icon.add}
                        style={styles.addButtonImage}/>
                    </View>
                  </TouchableOpacity>
                  <Modal 
                    isVisible={this.state.isColorPickerVisible}
                    style={styles.modal}>
                    <View>
                      <TouchableOpacity onPress={this._toggleColorPicker}>
                        <View style={styles.closeButton2}>
                        <Image 
                          source={Images.icon.close}
                          style={styles.closeButtoneImage}/>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.colorPickerContainer}>
                        <ColorPicker
                          onColorSelected={(classColor) => {
                            this.setState({classColor: classColor});
                            this._toggleColorPicker();
                          }}
                          style={styles.colorPicker}
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
          </Modal>
        </View>

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
  colorContainer: {
    width: '80%'
  },
  colorInputContainer: {
    width: "100%",  
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
  },
  modal: {
    alignItems: "center", 
    justifyContent: "center"
  },
  coloChooserContainer: {
    width: 320, 
    height: 320, 
    backgroundColor: 'white', 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 20
  },
  textAndCloseButtonRow: {
    flexDirection: 'row', 
    marginBottom: 20
  },
  chooseColorText: {
    fontSize: 20
  },
  closeButton1: {
    width: 30, 
    height: 30, 
    borderRadius: 100, 
    backgroundColor: "#eeeded",
    marginLeft: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtoneImage: {
    width: 15, height: 15
  },
  blockColorColumn: {
    flex: 0.8, flexDirection: 'column'
  },
  blockColorRow: {
    flexDirection: 'row'
  },
  closeButton2: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#eeeded",
    marginLeft: 290,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#c6c3c3",
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonImage: {
    width: 25, 
    height: 25
  },
  colorPickerContainer: {
    flex: 1,
    padding: 15,
    marginTop: 150
  },
  colorPicker: {
    flex: 0.8
  }
});

function colorBlockStyle(color) {
  return {
    margin: 10, 
    width: 50, 
    height: 50, 
    borderRadius: 100, 
    backgroundColor: color
  }
}

export default CourseDetailsScreen;
