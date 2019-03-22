import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Images from '../../../assets/images/index';

class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.addButton}>
          <Image 
            source={Images.icon.add}
            style={styles.addButtonImage}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#140bb9",
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 30
  },
  addButtonImage: {
    width: 27, 
    height: 27
  }
});


export default withNavigation(AddButton);


//routeName, width, height, margin, content
