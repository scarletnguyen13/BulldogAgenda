import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';

export default class ColorPicker extends Component {
  state = {
    colors: this.props.colors,
    selectedColor: this.props.selectedColor,
  };

  renderItem = ({ item }) => {
    return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.circle, { backgroundColor: item }]}
      onPress={() => {
        this.setState({ selectedColor: item });
        this.props.onSelect(item);
      }}>
      {this.state.selectedColor === item &&
        <View style={styles.selectedCircle} />}
    </TouchableOpacity>
  )};

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={{flex: 0.9, margin: 15, marginTop: 0}}>
          <FlatList
          data={this.state.colors}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          numColumns={3}
          showsVerticalScrollIndicator={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  selectedCircle: {
    width: 20, 
    height: 20, 
    borderRadius: 20, 
    backgroundColor: 'white'
  }
});
