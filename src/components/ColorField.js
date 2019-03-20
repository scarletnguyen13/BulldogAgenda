import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Image } from 'react-native';
import CloseButton from '../components/CloseButton';
import Modal from "react-native-modal";
import { ColorPicker } from 'react-native-color-picker';
import Images from '../../assets/images/index';

class ColorField extends Component {
  render() {
    return (
      <View style={styles.colorContainer}>
        <TouchableOpacity
          onPress={this.props._toggleColorChooser}
          style={styles.colorInputContainer}>
          <View pointerEvents='none'>
            <TextInput
              style={styles.colorTextInputStyle}
              placeholder="Color"
              onChangeText={(courseColor) => this.props._change(courseColor)}
              value={this.props.value}
              editable={false} 
              selectTextOnFocus={false}
            />
          </View>
        </TouchableOpacity>
        
        <Modal 
          isVisible={this.props.isColorChooserVisible}
          style={styles.modal}>
          <View style={styles.coloChooserContainer}>
            <View style={styles.textAndCloseButtonRow}>
              <Text style={styles.chooseColorText}>Choose Color</Text>
              <View>
                <CloseButton
                  _toggle={this.props._toggleColorChooser}
                  marginLeft={120}
                  marginTop={0}
                />
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
                <TouchableOpacity onPress={this.props._toggleColorPicker}>
                  <View style={styles.addButton}>
                    <Image 
                      source={Images.icon.add}
                      style={styles.addButtonImage}/>
                  </View>
                </TouchableOpacity>
                <Modal 
                  isVisible={this.props.isColorPickerVisible}
                  style={styles.modal}>
                  <View>
                    <CloseButton
                      _toggle={this.props._toggleColorPicker}
                      marginLeft={290}
                      marginTop={15}
                    />
                    <View style={styles.colorPickerContainer}>
                      <ColorPicker
                        onColorSelected={(courseColor) => {
                          this.props._change(courseColor);
                          this.props._toggleColorPicker;
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
    );
  }
}

const styles = StyleSheet.create({
  colorContainer: {
    width: '80%'
  },
  colorInputContainer: {
    width: "100%",  
    height: 40, 
    marginBottom: 40
  },
  modal: {
    alignItems: "center", 
    justifyContent: "center"
  },
  colorTextInputStyle: {
    width: '100%', 
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 2, 
    marginBottom: 40
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
  blockColorColumn: {
    flex: 0.8, flexDirection: 'column'
  },
  blockColorRow: {
    flexDirection: 'row'
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

export default ColorField;