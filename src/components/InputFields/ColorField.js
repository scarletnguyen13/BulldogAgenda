import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import CloseButton from '../Buttons/CloseButton';
import Modal from "react-native-modal";
import ColorPicker from '../InputFields/ColorPicker';
import getContrastYIQ from '../ContrastHelper';

class ColorField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#C6C3C3"]
    };
  }

  render() {
    return (
      <View style={styles.colorContainer}>
        <TouchableOpacity
          onPress={this.props._toggleColorChooser}
          style={[styles.colorInputContainer, colorTextInputStyleBackground(this.props.value)]}>
          <View pointerEvents='none'>
            <TextInput
              style={[styles.colorTextInputStyle, colorTextInputStyle(this.props.value)]}
              placeholder="Color"
              value={this.props.value}
              editable={false} 
              selectTextOnFocus={false}
              onChangeText = {(value) => this.props._change(this.props.block, value)}
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
              selectedColor={this.props.value}
              onSelect={(value) => this.props._change(this.props.block, value)}
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
    height: 600, 
    backgroundColor: 'white', 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 20
  },
  textAndCloseButtonRow: {
    flexDirection: 'row', 
    marginBottom: 15,
    marginTop: 10
  },
  chooseColorText: {
    fontSize: 20
  }
});

function colorTextInputStyleBackground(color) {
  return {
    backgroundColor: color
  }
}

function colorTextInputStyle(color) {
  return {
    color: getContrastYIQ(color)
  }
}

export default ColorField;