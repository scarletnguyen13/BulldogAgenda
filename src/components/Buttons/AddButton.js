import React from 'react';
import {
  TouchableOpacity, View, StyleSheet, Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Images from '../../../assets/images/index';

const AddButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.addButton}>
      <Image
        source={Images.icon.add}
        style={styles.addButtonImage}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  addButton: {
    margin: 10,
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#140bb9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  addButtonImage: {
    width: 23,
    height: 23
  }
});


export default withNavigation(AddButton);
