import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import CloseButton from '../components/CloseButton';
import Modal from "react-native-modal";
import ColorPicker from './ColorPicker';

class ColorField extends Component {
  state = {
    colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"],
    selectedColor: '#F44336',
  };

  onSelect = color => {
    this.setState({ selectedColor: color });
    this.props._change(color);
  }

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
            <ColorPicker
              colors={this.state.colors}
              selectedColor={this.state.selectedColor}
              onSelect={this.onSelect}
            />
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
    marginBottom: 5,
    marginTop: 10
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