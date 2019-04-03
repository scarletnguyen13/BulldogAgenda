import React, { Component } from 'react';
import {
  FlatList, TouchableOpacity, StyleSheet, View
} from 'react-native';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    const { colors, selectedColor } = this.props;
    this.state = { colors, selectedColor };
  }

  renderItem = ({ item }) => {
    const { selectedColor } = this.state;
    const { onSelect } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.circle, { backgroundColor: item }]}
        onPress={() => {
          this.setState({ selectedColor: item });
          onSelect(item);
        }}
      >
        {selectedColor === item
        && <View style={styles.selectedCircle} />}
      </TouchableOpacity>
    );
  };

  _keyExtractor = (item, index) => index;

  render() {
    const { colors } = this.state;
    const { _keyExtractor } = this;
    return (
      <View style={styles.container}>
        <FlatList
          data={colors}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={_keyExtractor}
          numColumns={3}
          showsVerticalScrollIndicator
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    margin: 20,
    marginTop: 0
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'white'
  }
});
